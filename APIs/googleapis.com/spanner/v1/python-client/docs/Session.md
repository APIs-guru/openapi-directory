# Session

A session in the Cloud Spanner API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approximate_last_use_time** | **str** | Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when the session is created. | [optional] [readonly] 
**creator_role** | **str** | The database role which created this session. | [optional] 
**labels** | **Dict[str, str]** | The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. * Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels. | [optional] 
**name** | **str** | Output only. The name of the session. This is always system-assigned. | [optional] [readonly] 

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


