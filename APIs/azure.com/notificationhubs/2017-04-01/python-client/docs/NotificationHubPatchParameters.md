# NotificationHubPatchParameters

Parameters supplied to the patch NotificationHub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationHubProperties**](NotificationHubProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_hub_patch_parameters import NotificationHubPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationHubPatchParameters from a JSON string
notification_hub_patch_parameters_instance = NotificationHubPatchParameters.from_json(json)
# print the JSON string representation of the object
print(NotificationHubPatchParameters.to_json())

# convert the object into a dict
notification_hub_patch_parameters_dict = notification_hub_patch_parameters_instance.to_dict()
# create an instance of NotificationHubPatchParameters from a dict
notification_hub_patch_parameters_from_dict = NotificationHubPatchParameters.from_dict(notification_hub_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


