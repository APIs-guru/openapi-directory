# IssuerBundle

The issuer for Key Vault certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IssuerAttributes**](IssuerAttributes.md) |  | [optional] 
**credentials** | [**IssuerCredentials**](IssuerCredentials.md) |  | [optional] 
**id** | **str** | Identifier for the issuer object. | [optional] [readonly] 
**org_details** | [**OrganizationDetails**](OrganizationDetails.md) |  | [optional] 
**provider** | **str** | The issuer provider. | [optional] 

## Example

```python
from openapi_client.models.issuer_bundle import IssuerBundle

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerBundle from a JSON string
issuer_bundle_instance = IssuerBundle.from_json(json)
# print the JSON string representation of the object
print(IssuerBundle.to_json())

# convert the object into a dict
issuer_bundle_dict = issuer_bundle_instance.to_dict()
# create an instance of IssuerBundle from a dict
issuer_bundle_from_dict = IssuerBundle.from_dict(issuer_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


