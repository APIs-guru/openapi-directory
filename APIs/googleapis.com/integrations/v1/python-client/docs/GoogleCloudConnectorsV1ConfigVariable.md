# GoogleCloudConnectorsV1ConfigVariable

ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Value is a bool. | [optional] 
**encryption_key_value** | [**GoogleCloudConnectorsV1EncryptionKey**](GoogleCloudConnectorsV1EncryptionKey.md) |  | [optional] 
**int_value** | **str** | Value is an integer | [optional] 
**key** | **str** | Key of the config variable. | [optional] 
**secret_value** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**string_value** | **str** | Value is a string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_config_variable import GoogleCloudConnectorsV1ConfigVariable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1ConfigVariable from a JSON string
google_cloud_connectors_v1_config_variable_instance = GoogleCloudConnectorsV1ConfigVariable.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1ConfigVariable.to_json())

# convert the object into a dict
google_cloud_connectors_v1_config_variable_dict = google_cloud_connectors_v1_config_variable_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1ConfigVariable from a dict
google_cloud_connectors_v1_config_variable_from_dict = GoogleCloudConnectorsV1ConfigVariable.from_dict(google_cloud_connectors_v1_config_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


