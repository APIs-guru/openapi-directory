# GoogleCloudRetailV2alphaUserEventImportSummary

A summary of import result. The UserEventImportSummary summarizes the import status for user events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**joined_events_count** | **str** | Count of user events imported with complete existing catalog information. | [optional] 
**unjoined_events_count** | **str** | Count of user events imported, but with catalog information not found in the imported catalog. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_user_event_import_summary import GoogleCloudRetailV2alphaUserEventImportSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaUserEventImportSummary from a JSON string
google_cloud_retail_v2alpha_user_event_import_summary_instance = GoogleCloudRetailV2alphaUserEventImportSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaUserEventImportSummary.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_user_event_import_summary_dict = google_cloud_retail_v2alpha_user_event_import_summary_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaUserEventImportSummary from a dict
google_cloud_retail_v2alpha_user_event_import_summary_from_dict = GoogleCloudRetailV2alphaUserEventImportSummary.from_dict(google_cloud_retail_v2alpha_user_event_import_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


