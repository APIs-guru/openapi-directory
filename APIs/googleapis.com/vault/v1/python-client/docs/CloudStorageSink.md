# CloudStorageSink

Export sink for Cloud Storage files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[CloudStorageFile]**](CloudStorageFile.md) | Output only. The exported files in Cloud Storage. | [optional] 

## Example

```python
from openapi_client.models.cloud_storage_sink import CloudStorageSink

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorageSink from a JSON string
cloud_storage_sink_instance = CloudStorageSink.from_json(json)
# print the JSON string representation of the object
print(CloudStorageSink.to_json())

# convert the object into a dict
cloud_storage_sink_dict = cloud_storage_sink_instance.to_dict()
# create an instance of CloudStorageSink from a dict
cloud_storage_sink_from_dict = CloudStorageSink.from_dict(cloud_storage_sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


