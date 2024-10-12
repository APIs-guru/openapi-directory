# TroubleshootingProperties

Storage location provided for troubleshoot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_id** | **str** | The ID for the storage account to save the troubleshoot result. | 
**storage_path** | **str** | The path to the blob to save the troubleshoot result in. | 

## Example

```python
from openapi_client.models.troubleshooting_properties import TroubleshootingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TroubleshootingProperties from a JSON string
troubleshooting_properties_instance = TroubleshootingProperties.from_json(json)
# print the JSON string representation of the object
print(TroubleshootingProperties.to_json())

# convert the object into a dict
troubleshooting_properties_dict = troubleshooting_properties_instance.to_dict()
# create an instance of TroubleshootingProperties from a dict
troubleshooting_properties_from_dict = TroubleshootingProperties.from_dict(troubleshooting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


