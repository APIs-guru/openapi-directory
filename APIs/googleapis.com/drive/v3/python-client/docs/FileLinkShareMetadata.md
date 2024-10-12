# FileLinkShareMetadata

Contains details about the link URLs that clients are using to refer to this item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_update_eligible** | **bool** | Output only. Whether the file is eligible for security update. | [optional] 
**security_update_enabled** | **bool** | Output only. Whether the security update is enabled for this file. | [optional] 

## Example

```python
from openapi_client.models.file_link_share_metadata import FileLinkShareMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FileLinkShareMetadata from a JSON string
file_link_share_metadata_instance = FileLinkShareMetadata.from_json(json)
# print the JSON string representation of the object
print(FileLinkShareMetadata.to_json())

# convert the object into a dict
file_link_share_metadata_dict = file_link_share_metadata_instance.to_dict()
# create an instance of FileLinkShareMetadata from a dict
file_link_share_metadata_from_dict = FileLinkShareMetadata.from_dict(file_link_share_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


