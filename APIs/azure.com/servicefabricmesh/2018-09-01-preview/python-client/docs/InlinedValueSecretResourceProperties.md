# InlinedValueSecretResourceProperties

Describes the properties of a secret resource whose value is provided explicitly as plaintext. The secret resource may have multiple values, each being uniquely versioned. The secret value of each version is stored encrypted, and delivered as plaintext into the context of applications referencing it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed. | [optional] 
**description** | **str** | User readable description of the secret. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the secret. | [optional] [readonly] 
**kind** | [**SecretKind**](SecretKind.md) |  | 
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.inlined_value_secret_resource_properties import InlinedValueSecretResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InlinedValueSecretResourceProperties from a JSON string
inlined_value_secret_resource_properties_instance = InlinedValueSecretResourceProperties.from_json(json)
# print the JSON string representation of the object
print(InlinedValueSecretResourceProperties.to_json())

# convert the object into a dict
inlined_value_secret_resource_properties_dict = inlined_value_secret_resource_properties_instance.to_dict()
# create an instance of InlinedValueSecretResourceProperties from a dict
inlined_value_secret_resource_properties_from_dict = InlinedValueSecretResourceProperties.from_dict(inlined_value_secret_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


