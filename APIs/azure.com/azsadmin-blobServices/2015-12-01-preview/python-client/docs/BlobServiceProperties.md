# BlobServiceProperties

Blob service properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**BlobServiceSettings**](BlobServiceSettings.md) |  | [optional] 
**health_status** | **str** | Current health status. | [optional] [readonly] 
**version** | **str** | Storage service version. | [optional] 

## Example

```python
from openapi_client.models.blob_service_properties import BlobServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServiceProperties from a JSON string
blob_service_properties_instance = BlobServiceProperties.from_json(json)
# print the JSON string representation of the object
print(BlobServiceProperties.to_json())

# convert the object into a dict
blob_service_properties_dict = blob_service_properties_instance.to_dict()
# create an instance of BlobServiceProperties from a dict
blob_service_properties_from_dict = BlobServiceProperties.from_dict(blob_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


