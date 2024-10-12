# GoogleCloudServicebrokerV1beta1ListBrokersResponse

The response for the `ListBrokers()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brokers** | [**List[GoogleCloudServicebrokerV1beta1Broker]**](GoogleCloudServicebrokerV1beta1Broker.md) | The list of brokers in the container. | [optional] 
**next_page_token** | **str** | This token allows you to get the next page of results for list requests. If the number of results is larger than &#x60;pageSize&#x60;, use the &#x60;nextPageToken&#x60; as a value for the query parameter &#x60;pageToken&#x60; in the next list request. Subsequent list requests will have their own &#x60;nextPageToken&#x60; to continue paging through the results | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_list_brokers_response import GoogleCloudServicebrokerV1beta1ListBrokersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1ListBrokersResponse from a JSON string
google_cloud_servicebroker_v1beta1_list_brokers_response_instance = GoogleCloudServicebrokerV1beta1ListBrokersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1ListBrokersResponse.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_list_brokers_response_dict = google_cloud_servicebroker_v1beta1_list_brokers_response_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1ListBrokersResponse from a dict
google_cloud_servicebroker_v1beta1_list_brokers_response_from_dict = GoogleCloudServicebrokerV1beta1ListBrokersResponse.from_dict(google_cloud_servicebroker_v1beta1_list_brokers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


