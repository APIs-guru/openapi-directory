# AvailableSkusResult

The available skus operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of skus. | [optional] 
**value** | [**List[SkuInformation]**](SkuInformation.md) | List of available skus. | [optional] [readonly] 

## Example

```python
from openapi_client.models.available_skus_result import AvailableSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableSkusResult from a JSON string
available_skus_result_instance = AvailableSkusResult.from_json(json)
# print the JSON string representation of the object
print(AvailableSkusResult.to_json())

# convert the object into a dict
available_skus_result_dict = available_skus_result_instance.to_dict()
# create an instance of AvailableSkusResult from a dict
available_skus_result_from_dict = AvailableSkusResult.from_dict(available_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


