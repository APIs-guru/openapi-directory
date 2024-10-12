# OutputFileBlobContainerDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_url** | **str** | The URL must include a Shared Access Signature (SAS) granting write permissions to the container. | 
**path** | **str** | If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name. | [optional] 

## Example

```python
from openapi_client.models.output_file_blob_container_destination import OutputFileBlobContainerDestination

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFileBlobContainerDestination from a JSON string
output_file_blob_container_destination_instance = OutputFileBlobContainerDestination.from_json(json)
# print the JSON string representation of the object
print(OutputFileBlobContainerDestination.to_json())

# convert the object into a dict
output_file_blob_container_destination_dict = output_file_blob_container_destination_instance.to_dict()
# create an instance of OutputFileBlobContainerDestination from a dict
output_file_blob_container_destination_from_dict = OutputFileBlobContainerDestination.from_dict(output_file_blob_container_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


