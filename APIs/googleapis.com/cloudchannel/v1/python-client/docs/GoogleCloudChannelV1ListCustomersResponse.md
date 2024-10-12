# GoogleCloudChannelV1ListCustomersResponse

Response message for CloudChannelService.ListCustomers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[GoogleCloudChannelV1Customer]**](GoogleCloudChannelV1Customer.md) | The customers belonging to a reseller or distributor. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_customers_response import GoogleCloudChannelV1ListCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListCustomersResponse from a JSON string
google_cloud_channel_v1_list_customers_response_instance = GoogleCloudChannelV1ListCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListCustomersResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_customers_response_dict = google_cloud_channel_v1_list_customers_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListCustomersResponse from a dict
google_cloud_channel_v1_list_customers_response_from_dict = GoogleCloudChannelV1ListCustomersResponse.from_dict(google_cloud_channel_v1_list_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


