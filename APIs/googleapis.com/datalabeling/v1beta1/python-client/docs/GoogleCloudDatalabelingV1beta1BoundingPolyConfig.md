# GoogleCloudDatalabelingV1beta1BoundingPolyConfig

Config for image bounding poly (and bounding box) human labeling task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 
**instruction_message** | **str** | Optional. Instruction message showed on contributors UI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_bounding_poly_config import GoogleCloudDatalabelingV1beta1BoundingPolyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1BoundingPolyConfig from a JSON string
google_cloud_datalabeling_v1beta1_bounding_poly_config_instance = GoogleCloudDatalabelingV1beta1BoundingPolyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1BoundingPolyConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_bounding_poly_config_dict = google_cloud_datalabeling_v1beta1_bounding_poly_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1BoundingPolyConfig from a dict
google_cloud_datalabeling_v1beta1_bounding_poly_config_from_dict = GoogleCloudDatalabelingV1beta1BoundingPolyConfig.from_dict(google_cloud_datalabeling_v1beta1_bounding_poly_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


