# BlobContainer

Azure Storage blob container information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the unique identifier of the blob container. | [optional] [readonly] 
**name** | **str** | the name of the blob container. | [optional] [readonly] 
**properties** | [**BlobContainerProperties**](BlobContainerProperties.md) |  | [optional] 
**type** | **str** | the type of the blob container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_container import BlobContainer

# TODO update the JSON string below
json = "{}"
# create an instance of BlobContainer from a JSON string
blob_container_instance = BlobContainer.from_json(json)
# print the JSON string representation of the object
print(BlobContainer.to_json())

# convert the object into a dict
blob_container_dict = blob_container_instance.to_dict()
# create an instance of BlobContainer from a dict
blob_container_from_dict = BlobContainer.from_dict(blob_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


