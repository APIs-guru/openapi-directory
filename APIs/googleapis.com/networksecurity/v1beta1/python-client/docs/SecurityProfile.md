# SecurityProfile

SecurityProfile is a resource that defines the behavior for one of many ProfileTypes. Next ID: 9

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Resource creation timestamp. | [optional] [readonly] 
**description** | **str** | Optional. An optional description of the profile. Max length 512 characters. | [optional] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels as key value pairs. | [optional] 
**name** | **str** | Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern &#x60;projects|organizations/*/locations/{location}/securityProfiles/{security_profile}&#x60;. | [optional] 
**threat_prevention_profile** | [**ThreatPreventionProfile**](ThreatPreventionProfile.md) |  | [optional] 
**type** | **str** | Immutable. The single ProfileType that the SecurityProfile resource configures. | [optional] 
**update_time** | **str** | Output only. Last resource update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_profile import SecurityProfile

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityProfile from a JSON string
security_profile_instance = SecurityProfile.from_json(json)
# print the JSON string representation of the object
print(SecurityProfile.to_json())

# convert the object into a dict
security_profile_dict = security_profile_instance.to_dict()
# create an instance of SecurityProfile from a dict
security_profile_from_dict = SecurityProfile.from_dict(security_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


