# GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig

Specification message containing the config for this SliceSpec. When `kind` is selected as `value` and/or `range`, only a single slice will be computed. When `all_values` is present, a separate slice will be computed for each possible label/value for the corresponding key in `config`. Examples, with feature zip_code with values 12345, 23334, 88888 and feature country with values \"US\", \"Canada\", \"Mexico\" in the dataset: Example 1: { \"zip_code\": { \"value\": { \"float_value\": 12345.0 } } } A single slice for any data with zip_code 12345 in the dataset. Example 2: { \"zip_code\": { \"range\": { \"low\": 12345, \"high\": 20000 } } } A single slice containing data where the zip_codes between 12345 and 20000 For this example, data with the zip_code of 12345 will be in this slice. Example 3: { \"zip_code\": { \"range\": { \"low\": 10000, \"high\": 20000 } }, \"country\": { \"value\": { \"string_value\": \"US\" } } } A single slice containing data where the zip_codes between 10000 and 20000 has the country \"US\". For this example, data with the zip_code of 12345 and country \"US\" will be in this slice. Example 4: { \"country\": {\"all_values\": { \"value\": true } } } Three slices are computed, one for each unique country in the dataset. Example 5: { \"country\": { \"all_values\": { \"value\": true } }, \"zip_code\": { \"value\": { \"float_value\": 12345.0 } } } Three slices are computed, one for each unique country in the dataset where the zip_code is also 12345. For this example, data with zip_code 12345 and country \"US\" will be in one slice, zip_code 12345 and country \"Canada\" in another slice, and zip_code 12345 and country \"Mexico\" in another slice, totaling 3 slices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If all_values is set to true, then all possible labels of the keyed feature will have another slice computed. Example: &#x60;{\&quot;all_values\&quot;:{\&quot;value\&quot;:true}}&#x60; | [optional] 
**range** | [**GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecRange**](GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecRange.md) |  | [optional] 
**value** | [**GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecValue**](GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config import GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig from a JSON string
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config_instance = GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config_dict = google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig from a dict
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config_from_dict = GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig.from_dict(google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_slice_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


