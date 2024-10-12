# FirebaseConfigFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apn_template** | **str** |  | 
**credentials_json** | **str** |  | [optional] 
**data_template** | **str** |  | 
**enabled** | **bool** |  | 
**notification_template** | **str** |  | 
**server_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.firebase_config_fields import FirebaseConfigFields

# TODO update the JSON string below
json = "{}"
# create an instance of FirebaseConfigFields from a JSON string
firebase_config_fields_instance = FirebaseConfigFields.from_json(json)
# print the JSON string representation of the object
print(FirebaseConfigFields.to_json())

# convert the object into a dict
firebase_config_fields_dict = firebase_config_fields_instance.to_dict()
# create an instance of FirebaseConfigFields from a dict
firebase_config_fields_from_dict = FirebaseConfigFields.from_dict(firebase_config_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


