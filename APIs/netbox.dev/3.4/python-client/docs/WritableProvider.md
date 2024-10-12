# WritableProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** |  | [optional] 
**asns** | **List[int]** |  | [optional] 
**circuit_count** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_provider import WritableProvider

# TODO update the JSON string below
json = "{}"
# create an instance of WritableProvider from a JSON string
writable_provider_instance = WritableProvider.from_json(json)
# print the JSON string representation of the object
print(WritableProvider.to_json())

# convert the object into a dict
writable_provider_dict = writable_provider_instance.to_dict()
# create an instance of WritableProvider from a dict
writable_provider_from_dict = WritableProvider.from_dict(writable_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


