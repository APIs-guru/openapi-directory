# AdministratorWebTokenSpec

Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_configurations** | [**AdministratorWebTokenSpecManagedConfigurations**](AdministratorWebTokenSpecManagedConfigurations.md) |  | [optional] 
**parent** | **str** | The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs. | [optional] 
**permission** | **List[str]** | Deprecated. Use PlaySearch.approveApps. | [optional] 
**play_search** | [**AdministratorWebTokenSpecPlaySearch**](AdministratorWebTokenSpecPlaySearch.md) |  | [optional] 
**private_apps** | [**AdministratorWebTokenSpecPrivateApps**](AdministratorWebTokenSpecPrivateApps.md) |  | [optional] 
**store_builder** | [**AdministratorWebTokenSpecStoreBuilder**](AdministratorWebTokenSpecStoreBuilder.md) |  | [optional] 
**web_apps** | [**AdministratorWebTokenSpecWebApps**](AdministratorWebTokenSpecWebApps.md) |  | [optional] 
**zero_touch** | [**AdministratorWebTokenSpecZeroTouch**](AdministratorWebTokenSpecZeroTouch.md) |  | [optional] 

## Example

```python
from openapi_client.models.administrator_web_token_spec import AdministratorWebTokenSpec

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorWebTokenSpec from a JSON string
administrator_web_token_spec_instance = AdministratorWebTokenSpec.from_json(json)
# print the JSON string representation of the object
print(AdministratorWebTokenSpec.to_json())

# convert the object into a dict
administrator_web_token_spec_dict = administrator_web_token_spec_instance.to_dict()
# create an instance of AdministratorWebTokenSpec from a dict
administrator_web_token_spec_from_dict = AdministratorWebTokenSpec.from_dict(administrator_web_token_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


