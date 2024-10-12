# ModelResponseCartScriptList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**result** | [**ResponseCartScriptListResult**](ResponseCartScriptListResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_response_cart_script_list import ModelResponseCartScriptList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResponseCartScriptList from a JSON string
model_response_cart_script_list_instance = ModelResponseCartScriptList.from_json(json)
# print the JSON string representation of the object
print(ModelResponseCartScriptList.to_json())

# convert the object into a dict
model_response_cart_script_list_dict = model_response_cart_script_list_instance.to_dict()
# create an instance of ModelResponseCartScriptList from a dict
model_response_cart_script_list_from_dict = ModelResponseCartScriptList.from_dict(model_response_cart_script_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


