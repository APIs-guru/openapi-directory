# IssuerParameters

Parameters for the issuer of the X509 component of a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_transparency** | **bool** | Indicates if the certificates generated under this policy should be published to certificate transparency logs. | [optional] 
**cty** | **str** | Certificate type as supported by the provider (optional); for example &#39;OV-SSL&#39;, &#39;EV-SSL&#39; | [optional] 
**name** | **str** | Name of the referenced issuer object or reserved names; for example, &#39;Self&#39; or &#39;Unknown&#39;. | [optional] 

## Example

```python
from openapi_client.models.issuer_parameters import IssuerParameters

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerParameters from a JSON string
issuer_parameters_instance = IssuerParameters.from_json(json)
# print the JSON string representation of the object
print(IssuerParameters.to_json())

# convert the object into a dict
issuer_parameters_dict = issuer_parameters_instance.to_dict()
# create an instance of IssuerParameters from a dict
issuer_parameters_from_dict = IssuerParameters.from_dict(issuer_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


