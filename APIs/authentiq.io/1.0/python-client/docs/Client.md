# Client

Client object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type** | **str** |  | [optional] 
**client_id** | **str** |  | [optional] 
**client_name** | **str** |  | 
**client_uri** | **str** |  | 
**contacts** | **List[str]** |  | [optional] 
**default_max_age** | **int** |  | [optional] 
**default_scopes** | **List[str]** |  | [optional] 
**grant_types** | **List[str]** |  | [optional] 
**logo_uri** | **str** |  | [optional] 
**policy_uri** | **str** |  | [optional] 
**redirect_uris** | **List[str]** |  | [optional] 
**response_types** | **List[str]** |  | [optional] 
**tos_uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.client import Client

# TODO update the JSON string below
json = "{}"
# create an instance of Client from a JSON string
client_instance = Client.from_json(json)
# print the JSON string representation of the object
print(Client.to_json())

# convert the object into a dict
client_dict = client_instance.to_dict()
# create an instance of Client from a dict
client_from_dict = Client.from_dict(client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


