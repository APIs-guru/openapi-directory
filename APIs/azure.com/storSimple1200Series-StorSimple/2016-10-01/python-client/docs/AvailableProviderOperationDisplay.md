# AvailableProviderOperationDisplay

Contains the localized display information for this particular operation / action.   These value will be used by several clients for   (1) custom role definitions for RBAC;   (2) complex query filters for the event service; and (3) audit history / records for management operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets Description  The localized friendly description for the operation, as it should be shown to the user.   It should be thorough, yet concise – it will be used in tool tips and detailed views. | [optional] 
**operation** | **str** | Gets or sets Operation  The localized friendly name for the operation, as it should be shown to the user.   It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing and include the entity/resource to which it applies. | [optional] 
**provider** | **str** | Gets or sets Provider  The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible.   It should use Title Casing and begin with “Microsoft” for 1st party services. | [optional] 
**resource** | **str** | Gets or sets Resource  The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider.   It should use Title Casing – for examples, please refer to the “name” section. | [optional] 

## Example

```python
from openapi_client.models.available_provider_operation_display import AvailableProviderOperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProviderOperationDisplay from a JSON string
available_provider_operation_display_instance = AvailableProviderOperationDisplay.from_json(json)
# print the JSON string representation of the object
print(AvailableProviderOperationDisplay.to_json())

# convert the object into a dict
available_provider_operation_display_dict = available_provider_operation_display_instance.to_dict()
# create an instance of AvailableProviderOperationDisplay from a dict
available_provider_operation_display_from_dict = AvailableProviderOperationDisplay.from_dict(available_provider_operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


