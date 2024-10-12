# SecurityCenterProperties

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Immutable. The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**resource_owners** | **List[str]** | Owners of the Google Cloud resource. | [optional] 
**resource_parent** | **str** | The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**resource_project** | **str** | The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**resource_type** | **str** | The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time. | [optional] 

## Example

```python
from openapi_client.models.security_center_properties import SecurityCenterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityCenterProperties from a JSON string
security_center_properties_instance = SecurityCenterProperties.from_json(json)
# print the JSON string representation of the object
print(SecurityCenterProperties.to_json())

# convert the object into a dict
security_center_properties_dict = security_center_properties_instance.to_dict()
# create an instance of SecurityCenterProperties from a dict
security_center_properties_from_dict = SecurityCenterProperties.from_dict(security_center_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


