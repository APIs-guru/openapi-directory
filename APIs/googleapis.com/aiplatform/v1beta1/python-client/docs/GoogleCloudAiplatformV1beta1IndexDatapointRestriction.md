# GoogleCloudAiplatformV1beta1IndexDatapointRestriction

Restriction of a datapoint which describe its attributes(tokens) from each of several attribute categories(namespaces).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_list** | **List[str]** | The attributes to allow in this namespace. e.g.: &#39;red&#39; | [optional] 
**deny_list** | **List[str]** | The attributes to deny in this namespace. e.g.: &#39;blue&#39; | [optional] 
**namespace** | **str** | The namespace of this restriction. e.g.: color. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_index_datapoint_restriction import GoogleCloudAiplatformV1beta1IndexDatapointRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1IndexDatapointRestriction from a JSON string
google_cloud_aiplatform_v1beta1_index_datapoint_restriction_instance = GoogleCloudAiplatformV1beta1IndexDatapointRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1IndexDatapointRestriction.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_index_datapoint_restriction_dict = google_cloud_aiplatform_v1beta1_index_datapoint_restriction_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1IndexDatapointRestriction from a dict
google_cloud_aiplatform_v1beta1_index_datapoint_restriction_from_dict = GoogleCloudAiplatformV1beta1IndexDatapointRestriction.from_dict(google_cloud_aiplatform_v1beta1_index_datapoint_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


