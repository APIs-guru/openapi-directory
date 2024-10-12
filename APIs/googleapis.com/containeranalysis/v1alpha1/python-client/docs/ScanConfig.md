# ScanConfig

Indicates various scans and whether they are turned on or off.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time this scan config was created. | [optional] 
**description** | **str** | Output only. A human-readable description of what the &#x60;ScanConfig&#x60; does. | [optional] 
**enabled** | **bool** | Indicates whether the Scan is enabled. | [optional] 
**name** | **str** | Output only. The name of the ScanConfig in the form “projects/{project_id}/scanConfigs/{scan_config_id}\&quot;. | [optional] 
**update_time** | **str** | Output only. The time this scan config was last updated. | [optional] 

## Example

```python
from openapi_client.models.scan_config import ScanConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScanConfig from a JSON string
scan_config_instance = ScanConfig.from_json(json)
# print the JSON string representation of the object
print(ScanConfig.to_json())

# convert the object into a dict
scan_config_dict = scan_config_instance.to_dict()
# create an instance of ScanConfig from a dict
scan_config_from_dict = ScanConfig.from_dict(scan_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


