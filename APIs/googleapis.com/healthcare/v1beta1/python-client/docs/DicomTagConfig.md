# DicomTagConfig

Specifies the parameters needed for the de-identification of DICOM stores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | Specifies custom tag selections and &#x60;Actions&#x60; to apply to them. Overrides &#x60;options&#x60; and &#x60;profile&#x60;. Conflicting &#x60;Actions&#x60; are applied in the order given. | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 
**profile_type** | **str** | Base profile type for handling DICOM tags. | [optional] 

## Example

```python
from openapi_client.models.dicom_tag_config import DicomTagConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DicomTagConfig from a JSON string
dicom_tag_config_instance = DicomTagConfig.from_json(json)
# print the JSON string representation of the object
print(DicomTagConfig.to_json())

# convert the object into a dict
dicom_tag_config_dict = dicom_tag_config_instance.to_dict()
# create an instance of DicomTagConfig from a dict
dicom_tag_config_from_dict = DicomTagConfig.from_dict(dicom_tag_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


