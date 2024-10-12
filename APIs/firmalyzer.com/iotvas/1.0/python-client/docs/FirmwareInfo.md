# FirmwareInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**release_date** | **str** |  | [optional] 
**sha2** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.firmware_info import FirmwareInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FirmwareInfo from a JSON string
firmware_info_instance = FirmwareInfo.from_json(json)
# print the JSON string representation of the object
print(FirmwareInfo.to_json())

# convert the object into a dict
firmware_info_dict = firmware_info_instance.to_dict()
# create an instance of FirmwareInfo from a dict
firmware_info_from_dict = FirmwareInfo.from_dict(firmware_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


