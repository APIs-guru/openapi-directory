# GoogleCloudRetailV2betaUserEventInputConfig

The input config source for user events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRetailV2betaBigQuerySource**](GoogleCloudRetailV2betaBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudRetailV2betaGcsSource**](GoogleCloudRetailV2betaGcsSource.md) |  | [optional] 
**user_event_inline_source** | [**GoogleCloudRetailV2betaUserEventInlineSource**](GoogleCloudRetailV2betaUserEventInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_user_event_input_config import GoogleCloudRetailV2betaUserEventInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaUserEventInputConfig from a JSON string
google_cloud_retail_v2beta_user_event_input_config_instance = GoogleCloudRetailV2betaUserEventInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaUserEventInputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_user_event_input_config_dict = google_cloud_retail_v2beta_user_event_input_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaUserEventInputConfig from a dict
google_cloud_retail_v2beta_user_event_input_config_from_dict = GoogleCloudRetailV2betaUserEventInputConfig.from_dict(google_cloud_retail_v2beta_user_event_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


