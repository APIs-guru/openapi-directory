# NestedPlatform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_platform import NestedPlatform

# TODO update the JSON string below
json = "{}"
# create an instance of NestedPlatform from a JSON string
nested_platform_instance = NestedPlatform.from_json(json)
# print the JSON string representation of the object
print(NestedPlatform.to_json())

# convert the object into a dict
nested_platform_dict = nested_platform_instance.to_dict()
# create an instance of NestedPlatform from a dict
nested_platform_from_dict = NestedPlatform.from_dict(nested_platform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


