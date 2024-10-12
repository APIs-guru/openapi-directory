# XPSVideoExportModelSpec

Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Upon receiving ExportModel request from user, AutoMl backend can serve the pre-generated models to user if exists (by copying the files from internal path to user provided location), otherwise, AutoMl backend will call xPS ExportModel API to generate the model on the fly with the requesting format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_model_output_config** | [**List[XPSExportModelOutputConfig]**](XPSExportModelOutputConfig.md) | Contains the model format and internal location of the model files to be exported/downloaded. Use the GCS bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files. | [optional] 

## Example

```python
from openapi_client.models.xps_video_export_model_spec import XPSVideoExportModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoExportModelSpec from a JSON string
xps_video_export_model_spec_instance = XPSVideoExportModelSpec.from_json(json)
# print the JSON string representation of the object
print(XPSVideoExportModelSpec.to_json())

# convert the object into a dict
xps_video_export_model_spec_dict = xps_video_export_model_spec_instance.to_dict()
# create an instance of XPSVideoExportModelSpec from a dict
xps_video_export_model_spec_from_dict = XPSVideoExportModelSpec.from_dict(xps_video_export_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


