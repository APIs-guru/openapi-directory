# GoogleCloudRecommendationengineV1beta1ImportMetadata

Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**failure_count** | **str** | Count of entries that encountered errors while processing. | [optional] 
**operation_name** | **str** | Name of the operation. | [optional] 
**request_id** | **str** | Id of the request / operation. This is parroting back the requestId that was passed in the request. | [optional] 
**success_count** | **str** | Count of entries that were processed successfully. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_import_metadata import GoogleCloudRecommendationengineV1beta1ImportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ImportMetadata from a JSON string
google_cloud_recommendationengine_v1beta1_import_metadata_instance = GoogleCloudRecommendationengineV1beta1ImportMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ImportMetadata.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_import_metadata_dict = google_cloud_recommendationengine_v1beta1_import_metadata_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ImportMetadata from a dict
google_cloud_recommendationengine_v1beta1_import_metadata_from_dict = GoogleCloudRecommendationengineV1beta1ImportMetadata.from_dict(google_cloud_recommendationengine_v1beta1_import_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


