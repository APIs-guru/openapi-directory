# APNConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**auth_key** | **str** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**bundle_id** | **str** |  | [optional] 
**development** | **bool** |  | [optional] 
**host** | **str** |  | [optional] 
**key_id** | **str** |  | [optional] 
**notification_template** | **str** |  | [optional] 
**p12_cert** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.apn_config_request import APNConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of APNConfigRequest from a JSON string
apn_config_request_instance = APNConfigRequest.from_json(json)
# print the JSON string representation of the object
print(APNConfigRequest.to_json())

# convert the object into a dict
apn_config_request_dict = apn_config_request_instance.to_dict()
# create an instance of APNConfigRequest from a dict
apn_config_request_from_dict = APNConfigRequest.from_dict(apn_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


