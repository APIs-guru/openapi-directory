# Session

A representation of a session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the session was created. | [optional] [readonly] 
**creator** | **str** | Output only. The email address of the user who created the session. | [optional] [readonly] 
**environment_config** | [**EnvironmentConfig**](EnvironmentConfig.md) |  | [optional] 
**jupyter_session** | [**JupyterConfig**](JupyterConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. | [optional] 
**name** | **str** | Required. The resource name of the session. | [optional] 
**runtime_config** | [**RuntimeConfig**](RuntimeConfig.md) |  | [optional] 
**runtime_info** | [**RuntimeInfo**](RuntimeInfo.md) |  | [optional] 
**session_template** | **str** | Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session. | [optional] 
**state** | **str** | Output only. A state of the session. | [optional] [readonly] 
**state_history** | [**List[SessionStateHistory]**](SessionStateHistory.md) | Output only. Historical state information for the session. | [optional] [readonly] 
**state_message** | **str** | Output only. Session state details, such as the failure description if the state is FAILED. | [optional] [readonly] 
**state_time** | **str** | Output only. The time when the session entered the current state. | [optional] [readonly] 
**user** | **str** | Optional. The email address of the user who owns the session. | [optional] 
**uuid** | **str** | Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session. | [optional] [readonly] 

## Example

```python
from openapi_client.models.session import Session

# TODO update the JSON string below
json = "{}"
# create an instance of Session from a JSON string
session_instance = Session.from_json(json)
# print the JSON string representation of the object
print(Session.to_json())

# convert the object into a dict
session_dict = session_instance.to_dict()
# create an instance of Session from a dict
session_from_dict = Session.from_dict(session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


