# GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec

Defines the Feature value(s) to import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required. ID of the Feature to import values of. This Feature must exist in the target EntityType, or the request will fail. | [optional] 
**source_field** | **str** | Source column to get the Feature values from. If not set, uses the column with the same name as the Feature ID. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec import GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec from a JSON string
google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec_instance = GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec_dict = google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec from a dict
google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec_from_dict = GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec.from_dict(google_cloud_aiplatform_v1beta1_import_feature_values_request_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


