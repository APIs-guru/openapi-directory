# KeyRange

KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: \"Bob\", \"2014-09-23\" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `\"Bob\"` that occurred in the year 2015: \"start_closed\": [\"Bob\", \"2015-01-01\"] \"end_closed\": [\"Bob\", \"2015-12-31\"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `\"Bob\"` that occurred during and after the year 2000: \"start_closed\": [\"Bob\", \"2000-01-01\"] \"end_closed\": [\"Bob\"] The next example retrieves all events for `\"Bob\"`: \"start_closed\": [\"Bob\"] \"end_closed\": [\"Bob\"] To retrieve events before the year 2000: \"start_closed\": [\"Bob\"] \"end_open\": [\"Bob\", \"2000-01-01\"] The following range includes all rows in the table: \"start_closed\": [] \"end_closed\": [] This range returns all users whose `UserName` begins with any character from A to C: \"start_closed\": [\"A\"] \"end_open\": [\"D\"] This range returns all users whose `UserName` begins with B: \"start_closed\": [\"B\"] \"end_open\": [\"C\"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: \"start_closed\": [\"100\"] \"end_closed\": [\"1\"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_closed** | **List[object]** | If the end is closed, then the range includes all rows whose first &#x60;len(end_closed)&#x60; key columns exactly match &#x60;end_closed&#x60;. | [optional] 
**end_open** | **List[object]** | If the end is open, then the range excludes rows whose first &#x60;len(end_open)&#x60; key columns exactly match &#x60;end_open&#x60;. | [optional] 
**start_closed** | **List[object]** | If the start is closed, then the range includes all rows whose first &#x60;len(start_closed)&#x60; key columns exactly match &#x60;start_closed&#x60;. | [optional] 
**start_open** | **List[object]** | If the start is open, then the range excludes rows whose first &#x60;len(start_open)&#x60; key columns exactly match &#x60;start_open&#x60;. | [optional] 

## Example

```python
from openapi_client.models.key_range import KeyRange

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRange from a JSON string
key_range_instance = KeyRange.from_json(json)
# print the JSON string representation of the object
print(KeyRange.to_json())

# convert the object into a dict
key_range_dict = key_range_instance.to_dict()
# create an instance of KeyRange from a dict
key_range_from_dict = KeyRange.from_dict(key_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


