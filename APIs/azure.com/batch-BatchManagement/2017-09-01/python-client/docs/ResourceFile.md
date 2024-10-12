# ResourceFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_source** | **str** | This URL must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. | 
**file_mode** | **str** | This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. | [optional] 
**file_path** | **str** |  | 

## Example

```python
from openapi_client.models.resource_file import ResourceFile

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceFile from a JSON string
resource_file_instance = ResourceFile.from_json(json)
# print the JSON string representation of the object
print(ResourceFile.to_json())

# convert the object into a dict
resource_file_dict = resource_file_instance.to_dict()
# create an instance of ResourceFile from a dict
resource_file_from_dict = ResourceFile.from_dict(resource_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


