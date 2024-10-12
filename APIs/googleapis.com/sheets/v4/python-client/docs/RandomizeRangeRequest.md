# RandomizeRangeRequest

Randomizes the order of the rows in a range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.randomize_range_request import RandomizeRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RandomizeRangeRequest from a JSON string
randomize_range_request_instance = RandomizeRangeRequest.from_json(json)
# print the JSON string representation of the object
print(RandomizeRangeRequest.to_json())

# convert the object into a dict
randomize_range_request_dict = randomize_range_request_instance.to_dict()
# create an instance of RandomizeRangeRequest from a dict
randomize_range_request_from_dict = RandomizeRangeRequest.from_dict(randomize_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


