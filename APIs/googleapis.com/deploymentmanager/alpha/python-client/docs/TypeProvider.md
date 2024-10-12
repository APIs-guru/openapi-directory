# TypeProvider

A type provider that describes a service-backed Type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_overrides** | [**List[CollectionOverride]**](CollectionOverride.md) | Allows resource handling overrides for specific collections | [optional] 
**credential** | [**Credential**](Credential.md) |  | [optional] 
**custom_certificate_authority_roots** | **List[str]** | List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB. | [optional] 
**description** | **str** | An optional textual description of the resource; provided by the client when the resource is created. | [optional] 
**descriptor_url** | **str** | Descriptor Url for the this type provider. | [optional] 
**id** | **str** | Output only. Unique identifier for the resource defined by the server. | [optional] 
**insert_time** | **str** | Output only. Creation timestamp in RFC3339 text format. | [optional] 
**labels** | [**List[TypeProviderLabelEntry]**](TypeProviderLabelEntry.md) | Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60; Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60; | [optional] 
**name** | **str** | Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60; which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. | [optional] 
**operation** | [**Operation**](Operation.md) |  | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 
**self_link** | **str** | Output only. Self link for the type provider. | [optional] 

## Example

```python
from openapi_client.models.type_provider import TypeProvider

# TODO update the JSON string below
json = "{}"
# create an instance of TypeProvider from a JSON string
type_provider_instance = TypeProvider.from_json(json)
# print the JSON string representation of the object
print(TypeProvider.to_json())

# convert the object into a dict
type_provider_dict = type_provider_instance.to_dict()
# create an instance of TypeProvider from a dict
type_provider_from_dict = TypeProvider.from_dict(type_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


