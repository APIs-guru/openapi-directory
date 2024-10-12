# GoogleCloudRetailV2alphaTransformedUserEventsMetadata

Metadata related to transform user events operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_events_count** | **str** | Count of entries in the source user events BigQuery table. | [optional] 
**transformed_events_count** | **str** | Count of entries in the transformed user events BigQuery table, which could be different from the actually imported number of user events. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_transformed_user_events_metadata import GoogleCloudRetailV2alphaTransformedUserEventsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaTransformedUserEventsMetadata from a JSON string
google_cloud_retail_v2alpha_transformed_user_events_metadata_instance = GoogleCloudRetailV2alphaTransformedUserEventsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaTransformedUserEventsMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_transformed_user_events_metadata_dict = google_cloud_retail_v2alpha_transformed_user_events_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaTransformedUserEventsMetadata from a dict
google_cloud_retail_v2alpha_transformed_user_events_metadata_from_dict = GoogleCloudRetailV2alphaTransformedUserEventsMetadata.from_dict(google_cloud_retail_v2alpha_transformed_user_events_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


