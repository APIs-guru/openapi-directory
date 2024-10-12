# Session

Session object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated_at** | **datetime** |  | [optional] 
**client_id** | **str** |  | [optional] 
**client_name** | **str** |  | [optional] 
**client_uri** | **str** |  | [optional] 
**concluded_at** | **datetime** |  | [optional] 
**connected_at** | **datetime** |  | [optional] 
**contacts** | **List[str]** |  | [optional] 
**created_at** | **str** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**logo_uri** | **str** |  | [optional] 
**nonce** | **str** |  | [optional] 
**policy_uri** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 
**response_mode** | **str** |  | [optional] 
**response_type** | **str** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 
**scopes_optional** | **List[str]** |  | [optional] 
**scopes_required** | **List[str]** |  | [optional] 
**scopes_seen** | **List[str]** |  | [optional] 
**scopes_signed** | **List[str]** |  | [optional] 
**session_id** | **str** |  | [optional] 
**session_state** | **str** |  | [optional] 
**session_uri** | **str** |  | [optional] 
**sub** | **str** |  | [optional] 
**tokens_seen** | **List[str]** |  | [optional] 
**tos_uri** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

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


