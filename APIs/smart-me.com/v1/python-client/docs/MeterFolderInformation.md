# MeterFolderInformation

Container Class for the Web API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**communication_module_firmware_version** | **int** | The Version of the Communication Module (if exists) | [optional] 
**communication_module_hardware_version** | **int** | The Version of the Communication Module (if exists) | [optional] 
**firmware_version** | **int** | The Firmware Version of a Meter | [optional] 
**hardware_version** | **int** | The Hardware Version of a Meter. | [optional] 
**input_informations** | [**List[InputInformation]**](InputInformation.md) | Informations about the available Inputs | [optional] 
**is_folder** | **bool** | Flag if it&#39;s a Folder or a Meter | [optional] 
**name** | **str** | Name of the Meter or Folder | [optional] 
**output_informations** | [**List[OutputInformation]**](OutputInformation.md) | Informations about the available Outputs | [optional] 

## Example

```python
from openapi_client.models.meter_folder_information import MeterFolderInformation

# TODO update the JSON string below
json = "{}"
# create an instance of MeterFolderInformation from a JSON string
meter_folder_information_instance = MeterFolderInformation.from_json(json)
# print the JSON string representation of the object
print(MeterFolderInformation.to_json())

# convert the object into a dict
meter_folder_information_dict = meter_folder_information_instance.to_dict()
# create an instance of MeterFolderInformation from a dict
meter_folder_information_from_dict = MeterFolderInformation.from_dict(meter_folder_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


