# Count

Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**up_to** | **str** | Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: &#x60;&#x60;&#x60; AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); &#x60;&#x60;&#x60; Requires: * Must be non-negative when present. | [optional] 

## Example

```python
from openapi_client.models.count import Count

# TODO update the JSON string below
json = "{}"
# create an instance of Count from a JSON string
count_instance = Count.from_json(json)
# print the JSON string representation of the object
print(Count.to_json())

# convert the object into a dict
count_dict = count_instance.to_dict()
# create an instance of Count from a dict
count_from_dict = Count.from_dict(count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


