# DetectedSoftware

Information about software detected on an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**software_family** | **str** | Output only. Software family of the detected software, e.g. Database, SAP family. | [optional] [readonly] 
**software_name** | **str** | Output only. Software&#39;s name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.detected_software import DetectedSoftware

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedSoftware from a JSON string
detected_software_instance = DetectedSoftware.from_json(json)
# print the JSON string representation of the object
print(DetectedSoftware.to_json())

# convert the object into a dict
detected_software_dict = detected_software_instance.to_dict()
# create an instance of DetectedSoftware from a dict
detected_software_from_dict = DetectedSoftware.from_dict(detected_software_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


