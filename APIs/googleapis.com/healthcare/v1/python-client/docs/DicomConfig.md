# DicomConfig

Specifies the parameters needed for de-identification of DICOM stores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_profile** | **str** | Tag filtering profile that determines which tags to keep/remove. | [optional] 
**keep_list** | [**TagFilterList**](TagFilterList.md) |  | [optional] 
**remove_list** | [**TagFilterList**](TagFilterList.md) |  | [optional] 
**skip_id_redaction** | **bool** | If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard&#39;s reasoning: \&quot;Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual&#39;s identity.\&quot; http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html | [optional] 

## Example

```python
from openapi_client.models.dicom_config import DicomConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DicomConfig from a JSON string
dicom_config_instance = DicomConfig.from_json(json)
# print the JSON string representation of the object
print(DicomConfig.to_json())

# convert the object into a dict
dicom_config_dict = dicom_config_instance.to_dict()
# create an instance of DicomConfig from a dict
dicom_config_from_dict = DicomConfig.from_dict(dicom_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


