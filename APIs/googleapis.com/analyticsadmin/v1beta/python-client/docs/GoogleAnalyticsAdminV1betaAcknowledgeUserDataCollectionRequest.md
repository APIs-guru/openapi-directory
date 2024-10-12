# GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest

Request message for AcknowledgeUserDataCollection RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement** | **str** | Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: \&quot;I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property.\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_acknowledge_user_data_collection_request import GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest from a JSON string
google_analytics_admin_v1beta_acknowledge_user_data_collection_request_instance = GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_acknowledge_user_data_collection_request_dict = google_analytics_admin_v1beta_acknowledge_user_data_collection_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest from a dict
google_analytics_admin_v1beta_acknowledge_user_data_collection_request_from_dict = GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest.from_dict(google_analytics_admin_v1beta_acknowledge_user_data_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


