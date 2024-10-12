# DKIMRotationResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dkim_host** | **str** |  | [optional] 
**dkim_pending_host** | **str** |  | [optional] 
**dkim_pending_text_value** | **str** |  | [optional] 
**dkim_revoked_host** | **str** |  | [optional] 
**dkim_revoked_text_value** | **str** |  | [optional] 
**dkim_test_value** | **str** |  | [optional] 
**dkim_update_status** | **str** |  | [optional] 
**dkim_verified** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**safe_to_remove_revoked_key_from_dns** | **bool** |  | [optional] 
**weak_dkim** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.dkim_rotation_response import DKIMRotationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DKIMRotationResponse from a JSON string
dkim_rotation_response_instance = DKIMRotationResponse.from_json(json)
# print the JSON string representation of the object
print(DKIMRotationResponse.to_json())

# convert the object into a dict
dkim_rotation_response_dict = dkim_rotation_response_instance.to_dict()
# create an instance of DKIMRotationResponse from a dict
dkim_rotation_response_from_dict = DKIMRotationResponse.from_dict(dkim_rotation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


