# SessionObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_rights** | [**Dict[str, AccessRights]**](AccessRights.md) |  | [optional] 
**allowance** | **float** |  | [optional] 
**apply_policy_id** | **str** |  | [optional] 
**basic_auth_data** | [**SessionObjectBasicAuthData**](SessionObjectBasicAuthData.md) |  | [optional] 
**expires** | **float** |  | [optional] 
**hmac_enabled** | **bool** |  | [optional] 
**hmac_string** | **str** |  | [optional] 
**is_inactive** | **bool** |  | [optional] 
**jwt_data** | [**SessionObjectJwtData**](SessionObjectJwtData.md) |  | [optional] 
**meta_data** | **object** |  | [optional] 
**monitor** | [**SessionObjectMonitor**](SessionObjectMonitor.md) |  | [optional] 
**oauth_client_id** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**per** | **float** |  | [optional] 
**quota_max** | **float** |  | [optional] 
**quota_remaining** | **float** |  | [optional] 
**quota_renewal_rate** | **str** |  | [optional] 
**quota_renews** | **float** |  | [optional] 
**rate** | **float** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.session_object import SessionObject

# TODO update the JSON string below
json = "{}"
# create an instance of SessionObject from a JSON string
session_object_instance = SessionObject.from_json(json)
# print the JSON string representation of the object
print(SessionObject.to_json())

# convert the object into a dict
session_object_dict = session_object_instance.to_dict()
# create an instance of SessionObject from a dict
session_object_from_dict = SessionObject.from_dict(session_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


