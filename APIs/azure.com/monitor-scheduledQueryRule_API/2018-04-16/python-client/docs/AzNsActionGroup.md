# AzNsActionGroup

Azure action group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_group** | **List[str]** | Azure Action Group reference. | [optional] 
**custom_webhook_payload** | **str** | Custom payload to be sent for all webhook URI in Azure action group | [optional] 
**email_subject** | **str** | Custom subject override for all email ids in Azure action group | [optional] 

## Example

```python
from openapi_client.models.az_ns_action_group import AzNsActionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AzNsActionGroup from a JSON string
az_ns_action_group_instance = AzNsActionGroup.from_json(json)
# print the JSON string representation of the object
print(AzNsActionGroup.to_json())

# convert the object into a dict
az_ns_action_group_dict = az_ns_action_group_instance.to_dict()
# create an instance of AzNsActionGroup from a dict
az_ns_action_group_from_dict = AzNsActionGroup.from_dict(az_ns_action_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


