# AvailablePrebuiltEntityModel

Available Prebuilt entity model for using in an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The entity description and usage information. | [optional] 
**examples** | **str** | Usage examples. | [optional] 
**name** | **str** | The entity name. | [optional] 

## Example

```python
from openapi_client.models.available_prebuilt_entity_model import AvailablePrebuiltEntityModel

# TODO update the JSON string below
json = "{}"
# create an instance of AvailablePrebuiltEntityModel from a JSON string
available_prebuilt_entity_model_instance = AvailablePrebuiltEntityModel.from_json(json)
# print the JSON string representation of the object
print(AvailablePrebuiltEntityModel.to_json())

# convert the object into a dict
available_prebuilt_entity_model_dict = available_prebuilt_entity_model_instance.to_dict()
# create an instance of AvailablePrebuiltEntityModel from a dict
available_prebuilt_entity_model_from_dict = AvailablePrebuiltEntityModel.from_dict(available_prebuilt_entity_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


