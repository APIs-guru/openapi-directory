# PatchOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**address** | [**PostDriversRequestAddress**](PostDriversRequestAddress.md) |  | [optional] 
**channels** | [**PatchOrganizationRequestChannels**](PatchOrganizationRequestChannels.md) |  | [optional] 
**configurations** | [**PatchOrganizationRequestConfigurations**](PatchOrganizationRequestConfigurations.md) |  | [optional] 
**links** | [**PatchOrganizationRequestLinks**](PatchOrganizationRequestLinks.md) |  | [optional] 
**locations** | **List[object]** |  | [optional] 
**logo** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**otp** | **str** |  | [optional] 
**stripe_connected_account_id** | **str** |  | [optional] 
**stripe_country** | **str** |  | [optional] 
**stripe_currency** | **str** |  | [optional] 
**stripe_reserve_amount** | **int** |  | [optional] 
**support** | [**PatchOrganizationRequestSupport**](PatchOrganizationRequestSupport.md) |  | [optional] 
**support_chat** | [**PatchOrganizationRequestSupportChat**](PatchOrganizationRequestSupportChat.md) |  | [optional] 
**theme** | [**PatchOrganizationRequestTheme**](PatchOrganizationRequestTheme.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request import PatchOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequest from a JSON string
patch_organization_request_instance = PatchOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequest.to_json())

# convert the object into a dict
patch_organization_request_dict = patch_organization_request_instance.to_dict()
# create an instance of PatchOrganizationRequest from a dict
patch_organization_request_from_dict = PatchOrganizationRequest.from_dict(patch_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


