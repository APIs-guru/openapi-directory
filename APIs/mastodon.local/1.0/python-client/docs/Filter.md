# Filter

Represents a user-defined filter for determining which statuses should not be shown to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **List[str]** | The contexts in which the filter should be applied. | [optional] 
**expires_at** | **str** | When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire | [optional] 
**id** | **str** | The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number. | [optional] 
**irreversible** | **bool** | Should matching entities in home and notifications be dropped by the server? | [optional] 
**phrase** | **str** | The text to be filtered. | [optional] 
**whole_word** | **bool** | Should the filter consider word boundaries? | [optional] 

## Example

```python
from openapi_client.models.filter import Filter

# TODO update the JSON string below
json = "{}"
# create an instance of Filter from a JSON string
filter_instance = Filter.from_json(json)
# print the JSON string representation of the object
print(Filter.to_json())

# convert the object into a dict
filter_dict = filter_instance.to_dict()
# create an instance of Filter from a dict
filter_from_dict = Filter.from_dict(filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


