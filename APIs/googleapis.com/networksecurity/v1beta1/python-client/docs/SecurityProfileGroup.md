# SecurityProfileGroup

SecurityProfileGroup is a resource that defines the behavior for various ProfileTypes. Next ID: 8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Resource creation timestamp. | [optional] [readonly] 
**description** | **str** | Optional. An optional description of the profile group. Max length 2048 characters. | [optional] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels as key value pairs. | [optional] 
**name** | **str** | Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern &#x60;projects|organizations/*/locations/{location}/securityProfileGroups/{security_profile_group}&#x60;. | [optional] 
**threat_prevention_profile** | **str** | Optional. Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. | [optional] 
**update_time** | **str** | Output only. Last resource update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_profile_group import SecurityProfileGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityProfileGroup from a JSON string
security_profile_group_instance = SecurityProfileGroup.from_json(json)
# print the JSON string representation of the object
print(SecurityProfileGroup.to_json())

# convert the object into a dict
security_profile_group_dict = security_profile_group_instance.to_dict()
# create an instance of SecurityProfileGroup from a dict
security_profile_group_from_dict = SecurityProfileGroup.from_dict(security_profile_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


