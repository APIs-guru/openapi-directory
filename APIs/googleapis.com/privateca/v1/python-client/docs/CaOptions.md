# CaOptions

Describes values that are relevant in a CA certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_ca** | **bool** | Optional. Refers to the \&quot;CA\&quot; X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate. | [optional] 
**max_issuer_path_length** | **int** | Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate. | [optional] 

## Example

```python
from openapi_client.models.ca_options import CaOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CaOptions from a JSON string
ca_options_instance = CaOptions.from_json(json)
# print the JSON string representation of the object
print(CaOptions.to_json())

# convert the object into a dict
ca_options_dict = ca_options_instance.to_dict()
# create an instance of CaOptions from a dict
ca_options_from_dict = CaOptions.from_dict(ca_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


