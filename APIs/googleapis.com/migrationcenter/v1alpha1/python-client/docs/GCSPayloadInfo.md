# GCSPayloadInfo

A resource that represents a payload hosted on Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The import job format. | [optional] 
**path** | **str** | The payload path in Google Cloud Storage. | [optional] 

## Example

```python
from openapi_client.models.gcs_payload_info import GCSPayloadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GCSPayloadInfo from a JSON string
gcs_payload_info_instance = GCSPayloadInfo.from_json(json)
# print the JSON string representation of the object
print(GCSPayloadInfo.to_json())

# convert the object into a dict
gcs_payload_info_dict = gcs_payload_info_instance.to_dict()
# create an instance of GCSPayloadInfo from a dict
gcs_payload_info_from_dict = GCSPayloadInfo.from_dict(gcs_payload_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


