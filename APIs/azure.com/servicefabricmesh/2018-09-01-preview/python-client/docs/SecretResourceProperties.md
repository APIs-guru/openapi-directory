# SecretResourceProperties

Describes the properties of a secret resource.

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
from openapi_client.models.secret_resource_properties import SecretResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretResourceProperties from a JSON string
secret_resource_properties_instance = SecretResourceProperties.from_json(json)
# print the JSON string representation of the object
print(SecretResourceProperties.to_json())

# convert the object into a dict
secret_resource_properties_dict = secret_resource_properties_instance.to_dict()
# create an instance of SecretResourceProperties from a dict
secret_resource_properties_from_dict = SecretResourceProperties.from_dict(secret_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


