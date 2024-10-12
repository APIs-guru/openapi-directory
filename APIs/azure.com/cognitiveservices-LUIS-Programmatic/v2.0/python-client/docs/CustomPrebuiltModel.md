# CustomPrebuiltModel

A Custom Prebuilt model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**custom_prebuilt_domain_name** | **str** | The domain name. | [optional] 
**custom_prebuilt_model_name** | **str** | The intent name or entity name. | [optional] 

## Example

```python
from openapi_client.models.custom_prebuilt_model import CustomPrebuiltModel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPrebuiltModel from a JSON string
custom_prebuilt_model_instance = CustomPrebuiltModel.from_json(json)
# print the JSON string representation of the object
print(CustomPrebuiltModel.to_json())

# convert the object into a dict
custom_prebuilt_model_dict = custom_prebuilt_model_instance.to_dict()
# create an instance of CustomPrebuiltModel from a dict
custom_prebuilt_model_from_dict = CustomPrebuiltModel.from_dict(custom_prebuilt_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


