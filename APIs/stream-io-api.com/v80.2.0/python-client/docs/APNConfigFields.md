# APNConfigFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key** | **str** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**bundle_id** | **str** |  | [optional] 
**development** | **bool** |  | 
**enabled** | **bool** |  | 
**host** | **str** |  | [optional] 
**key_id** | **str** |  | [optional] 
**notification_template** | **str** |  | 
**p12_cert** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.apn_config_fields import APNConfigFields

# TODO update the JSON string below
json = "{}"
# create an instance of APNConfigFields from a JSON string
apn_config_fields_instance = APNConfigFields.from_json(json)
# print the JSON string representation of the object
print(APNConfigFields.to_json())

# convert the object into a dict
apn_config_fields_dict = apn_config_fields_instance.to_dict()
# create an instance of APNConfigFields from a dict
apn_config_fields_from_dict = APNConfigFields.from_dict(apn_config_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


