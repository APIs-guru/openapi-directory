# BlobService

The BLOB service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobServiceProperties**](BlobServiceProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.blob_service import BlobService

# TODO update the JSON string below
json = "{}"
# create an instance of BlobService from a JSON string
blob_service_instance = BlobService.from_json(json)
# print the JSON string representation of the object
print(BlobService.to_json())

# convert the object into a dict
blob_service_dict = blob_service_instance.to_dict()
# create an instance of BlobService from a dict
blob_service_from_dict = BlobService.from_dict(blob_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


