# GoogleCloudDiscoveryengineV1alphaListDataStoresResponse

Response message for DataStoreService.ListDataStores method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_stores** | [**List[GoogleCloudDiscoveryengineV1alphaDataStore]**](GoogleCloudDiscoveryengineV1alphaDataStore.md) | All the customer&#39;s DataStores. | [optional] 
**next_page_token** | **str** | A token that can be sent as ListDataStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_list_data_stores_response import GoogleCloudDiscoveryengineV1alphaListDataStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaListDataStoresResponse from a JSON string
google_cloud_discoveryengine_v1alpha_list_data_stores_response_instance = GoogleCloudDiscoveryengineV1alphaListDataStoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaListDataStoresResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_list_data_stores_response_dict = google_cloud_discoveryengine_v1alpha_list_data_stores_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaListDataStoresResponse from a dict
google_cloud_discoveryengine_v1alpha_list_data_stores_response_from_dict = GoogleCloudDiscoveryengineV1alphaListDataStoresResponse.from_dict(google_cloud_discoveryengine_v1alpha_list_data_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


