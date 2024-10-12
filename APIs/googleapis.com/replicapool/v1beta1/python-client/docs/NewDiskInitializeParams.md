# NewDiskInitializeParams

Initialization parameters for creating a new disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **str** | The size of the created disk in gigabytes. | [optional] 
**disk_type** | **str** | Name of the disk type resource describing which disk type to use to create the disk. For example &#39;pd-ssd&#39; or &#39;pd-standard&#39;. Default is &#39;pd-standard&#39; | [optional] 
**source_image** | **str** | The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as: http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD | [optional] 

## Example

```python
from openapi_client.models.new_disk_initialize_params import NewDiskInitializeParams

# TODO update the JSON string below
json = "{}"
# create an instance of NewDiskInitializeParams from a JSON string
new_disk_initialize_params_instance = NewDiskInitializeParams.from_json(json)
# print the JSON string representation of the object
print(NewDiskInitializeParams.to_json())

# convert the object into a dict
new_disk_initialize_params_dict = new_disk_initialize_params_instance.to_dict()
# create an instance of NewDiskInitializeParams from a dict
new_disk_initialize_params_from_dict = NewDiskInitializeParams.from_dict(new_disk_initialize_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


