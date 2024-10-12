# X509Parameters

An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_extensions** | [**List[X509Extension]**](X509Extension.md) | Optional. Describes custom X.509 extensions. | [optional] 
**aia_ocsp_servers** | **List[str]** | Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the \&quot;Authority Information Access\&quot; extension in the certificate. | [optional] 
**ca_options** | [**CaOptions**](CaOptions.md) |  | [optional] 
**key_usage** | [**KeyUsage**](KeyUsage.md) |  | [optional] 
**name_constraints** | [**NameConstraints**](NameConstraints.md) |  | [optional] 
**policy_ids** | [**List[ObjectId]**](ObjectId.md) | Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. | [optional] 

## Example

```python
from openapi_client.models.x509_parameters import X509Parameters

# TODO update the JSON string below
json = "{}"
# create an instance of X509Parameters from a JSON string
x509_parameters_instance = X509Parameters.from_json(json)
# print the JSON string representation of the object
print(X509Parameters.to_json())

# convert the object into a dict
x509_parameters_dict = x509_parameters_instance.to_dict()
# create an instance of X509Parameters from a dict
x509_parameters_from_dict = X509Parameters.from_dict(x509_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


