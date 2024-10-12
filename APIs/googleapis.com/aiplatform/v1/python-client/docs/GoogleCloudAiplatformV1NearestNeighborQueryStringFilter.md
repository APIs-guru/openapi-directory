# GoogleCloudAiplatformV1NearestNeighborQueryStringFilter

String filter is used to search a subset of the entities by using boolean rules on string columns. For example: if a query specifies string filter with 'name = color, allow_tokens = {red, blue}, deny_tokens = {purple}',' then that query will match entities that are red or blue, but if those points are also purple, then they will be excluded even if they are red/blue. Only string filter is supported for now, numeric filter will be supported in the near future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_tokens** | **List[str]** | Optional. The allowed tokens. | [optional] 
**deny_tokens** | **List[str]** | Optional. The denied tokens. | [optional] 
**name** | **str** | Required. Column names in BigQuery that used as filters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter import GoogleCloudAiplatformV1NearestNeighborQueryStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NearestNeighborQueryStringFilter from a JSON string
google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter_instance = GoogleCloudAiplatformV1NearestNeighborQueryStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NearestNeighborQueryStringFilter.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter_dict = google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NearestNeighborQueryStringFilter from a dict
google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter_from_dict = GoogleCloudAiplatformV1NearestNeighborQueryStringFilter.from_dict(google_cloud_aiplatform_v1_nearest_neighbor_query_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


