# DataDiskImage

Data disk image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **int** | The LUN. | [optional] [readonly] 
**source_blob_sas_uri** | **str** | SAS key for source blob. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_disk_image import DataDiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of DataDiskImage from a JSON string
data_disk_image_instance = DataDiskImage.from_json(json)
# print the JSON string representation of the object
print(DataDiskImage.to_json())

# convert the object into a dict
data_disk_image_dict = data_disk_image_instance.to_dict()
# create an instance of DataDiskImage from a dict
data_disk_image_from_dict = DataDiskImage.from_dict(data_disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


