# FirebaseConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**apn_template** | **str** |  | [optional] 
**credentials_json** | **str** |  | [optional] 
**data_template** | **str** |  | [optional] 
**notification_template** | **str** |  | [optional] 
**server_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.firebase_config_request import FirebaseConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FirebaseConfigRequest from a JSON string
firebase_config_request_instance = FirebaseConfigRequest.from_json(json)
# print the JSON string representation of the object
print(FirebaseConfigRequest.to_json())

# convert the object into a dict
firebase_config_request_dict = firebase_config_request_instance.to_dict()
# create an instance of FirebaseConfigRequest from a dict
firebase_config_request_from_dict = FirebaseConfigRequest.from_dict(firebase_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


