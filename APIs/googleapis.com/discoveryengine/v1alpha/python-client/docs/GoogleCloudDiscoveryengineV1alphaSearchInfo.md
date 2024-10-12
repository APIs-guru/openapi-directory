# GoogleCloudDiscoveryengineV1alphaSearchInfo

Detailed search information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **int** | An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an &#x60;INVALID_ARGUMENT&#x60; is returned. This can only be set for &#x60;search&#x60; events. Other event types should not set this field. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**order_by** | **str** | The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. This can only be set for &#x60;search&#x60; events. Other event types should not set this field. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**search_query** | **str** | The user&#39;s search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. At least one of search_query or PageInfo.page_category is required for &#x60;search&#x60; events. Other event types should not set this field. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_info import GoogleCloudDiscoveryengineV1alphaSearchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchInfo from a JSON string
google_cloud_discoveryengine_v1alpha_search_info_instance = GoogleCloudDiscoveryengineV1alphaSearchInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_info_dict = google_cloud_discoveryengine_v1alpha_search_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchInfo from a dict
google_cloud_discoveryengine_v1alpha_search_info_from_dict = GoogleCloudDiscoveryengineV1alphaSearchInfo.from_dict(google_cloud_discoveryengine_v1alpha_search_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


