# GoogleCloudApigeeV1SecurityAction

A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least one condition is required to create a SecurityAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow** | **object** | Message that should be set in case of an Allow Action. This does not have any fields. | [optional] 
**condition_config** | [**GoogleCloudApigeeV1SecurityActionConditionConfig**](GoogleCloudApigeeV1SecurityActionConditionConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The create time for this SecurityAction. | [optional] [readonly] 
**deny** | [**GoogleCloudApigeeV1SecurityActionDeny**](GoogleCloudApigeeV1SecurityActionDeny.md) |  | [optional] 
**description** | **str** | Optional. An optional user provided description of the SecurityAction. | [optional] 
**expire_time** | **str** | The expiration for this SecurityAction. | [optional] 
**flag** | [**GoogleCloudApigeeV1SecurityActionFlag**](GoogleCloudApigeeV1SecurityActionFlag.md) |  | [optional] 
**name** | **str** | Immutable. This field is ignored during creation as per AIP-133. Please set the &#x60;security_action_id&#x60; field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action} | [optional] 
**state** | **str** | Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced. | [optional] 
**ttl** | **str** | Input only. The TTL for this SecurityAction. | [optional] 
**update_time** | **str** | Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_action import GoogleCloudApigeeV1SecurityAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityAction from a JSON string
google_cloud_apigee_v1_security_action_instance = GoogleCloudApigeeV1SecurityAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityAction.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_action_dict = google_cloud_apigee_v1_security_action_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityAction from a dict
google_cloud_apigee_v1_security_action_from_dict = GoogleCloudApigeeV1SecurityAction.from_dict(google_cloud_apigee_v1_security_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


