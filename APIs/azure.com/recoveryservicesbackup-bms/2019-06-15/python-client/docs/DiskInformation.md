# DiskInformation

Disk information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.disk_information import DiskInformation

# TODO update the JSON string below
json = "{}"
# create an instance of DiskInformation from a JSON string
disk_information_instance = DiskInformation.from_json(json)
# print the JSON string representation of the object
print(DiskInformation.to_json())

# convert the object into a dict
disk_information_dict = disk_information_instance.to_dict()
# create an instance of DiskInformation from a dict
disk_information_from_dict = DiskInformation.from_dict(disk_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


