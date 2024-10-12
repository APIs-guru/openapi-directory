# SessionTemplate

A representation of a session template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the template was created. | [optional] [readonly] 
**creator** | **str** | Output only. The email address of the user who created the template. | [optional] [readonly] 
**description** | **str** | Optional. Brief description of the template. | [optional] 
**environment_config** | [**EnvironmentConfig**](EnvironmentConfig.md) |  | [optional] 
**jupyter_session** | [**JupyterConfig**](JupyterConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. | [optional] 
**name** | **str** | Required. The resource name of the session template. | [optional] 
**runtime_config** | [**RuntimeConfig**](RuntimeConfig.md) |  | [optional] 
**update_time** | **str** | Output only. The time the template was last updated. | [optional] [readonly] 
**uuid** | **str** | Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it creates the session template. | [optional] [readonly] 

## Example

```python
from openapi_client.models.session_template import SessionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of SessionTemplate from a JSON string
session_template_instance = SessionTemplate.from_json(json)
# print the JSON string representation of the object
print(SessionTemplate.to_json())

# convert the object into a dict
session_template_dict = session_template_instance.to_dict()
# create an instance of SessionTemplate from a dict
session_template_from_dict = SessionTemplate.from_dict(session_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


