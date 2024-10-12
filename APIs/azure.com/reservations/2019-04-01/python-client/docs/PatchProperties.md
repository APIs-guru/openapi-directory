# PatchProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_scope_type** | [**AppliedScopeType**](AppliedScopeType.md) |  | [optional] 
**applied_scopes** | **List[str]** | List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. | [optional] 
**instance_flexibility** | [**InstanceFlexibility**](InstanceFlexibility.md) |  | [optional] 
**name** | **str** | Name of the Reservation | [optional] 
**renew** | **bool** | Setting this to true will automatically purchase a new reservation on the expiration date time. | [optional] [default to False]
**renew_properties** | [**PatchPropertiesRenewProperties**](PatchPropertiesRenewProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_properties import PatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PatchProperties from a JSON string
patch_properties_instance = PatchProperties.from_json(json)
# print the JSON string representation of the object
print(PatchProperties.to_json())

# convert the object into a dict
patch_properties_dict = patch_properties_instance.to_dict()
# create an instance of PatchProperties from a dict
patch_properties_from_dict = PatchProperties.from_dict(patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


