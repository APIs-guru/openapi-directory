# DicomStore

Represents a DICOM store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. | [optional] 
**name** | **str** | Identifier. Resource name of the DICOM store, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}&#x60;. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**stream_configs** | [**List[GoogleCloudHealthcareV1DicomStreamConfig]**](GoogleCloudHealthcareV1DicomStreamConfig.md) | Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to &#x60;stream_configs&#x60;, DICOM instance insertions are streamed to the new destination. When a config is removed from &#x60;stream_configs&#x60;, the server stops streaming to that destination. Each config must contain a unique destination. | [optional] 

## Example

```python
from openapi_client.models.dicom_store import DicomStore

# TODO update the JSON string below
json = "{}"
# create an instance of DicomStore from a JSON string
dicom_store_instance = DicomStore.from_json(json)
# print the JSON string representation of the object
print(DicomStore.to_json())

# convert the object into a dict
dicom_store_dict = dicom_store_instance.to_dict()
# create an instance of DicomStore from a dict
dicom_store_from_dict = DicomStore.from_dict(dicom_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


