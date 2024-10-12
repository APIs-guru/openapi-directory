# GoogleCloudChannelV1ListSkusResponse

Response message for ListSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 
**skus** | [**List[GoogleCloudChannelV1Sku]**](GoogleCloudChannelV1Sku.md) | The list of SKUs requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_skus_response import GoogleCloudChannelV1ListSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListSkusResponse from a JSON string
google_cloud_channel_v1_list_skus_response_instance = GoogleCloudChannelV1ListSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListSkusResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_skus_response_dict = google_cloud_channel_v1_list_skus_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListSkusResponse from a dict
google_cloud_channel_v1_list_skus_response_from_dict = GoogleCloudChannelV1ListSkusResponse.from_dict(google_cloud_channel_v1_list_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


