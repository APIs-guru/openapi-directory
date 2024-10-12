# BlobLocation

Describes the access location for a blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** | Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI) | [optional] 
**uri** | **str** | The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload. | 

## Example

```python
from openapi_client.models.blob_location import BlobLocation

# TODO update the JSON string below
json = "{}"
# create an instance of BlobLocation from a JSON string
blob_location_instance = BlobLocation.from_json(json)
# print the JSON string representation of the object
print(BlobLocation.to_json())

# convert the object into a dict
blob_location_dict = blob_location_instance.to_dict()
# create an instance of BlobLocation from a dict
blob_location_from_dict = BlobLocation.from_dict(blob_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


