# GoogleCloudDatalabelingV1beta1LabelStats

Statistics about annotation specs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_count** | **Dict[str, str]** | Map of each annotation spec&#39;s example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_label_stats import GoogleCloudDatalabelingV1beta1LabelStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1LabelStats from a JSON string
google_cloud_datalabeling_v1beta1_label_stats_instance = GoogleCloudDatalabelingV1beta1LabelStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1LabelStats.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_label_stats_dict = google_cloud_datalabeling_v1beta1_label_stats_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1LabelStats from a dict
google_cloud_datalabeling_v1beta1_label_stats_from_dict = GoogleCloudDatalabelingV1beta1LabelStats.from_dict(google_cloud_datalabeling_v1beta1_label_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


