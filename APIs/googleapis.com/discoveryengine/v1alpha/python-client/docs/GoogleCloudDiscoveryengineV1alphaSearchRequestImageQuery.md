# GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery

Specifies the image query input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_bytes** | **str** | Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_image_query import GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_image_query_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_image_query_dict = google_cloud_discoveryengine_v1alpha_search_request_image_query_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery from a dict
google_cloud_discoveryengine_v1alpha_search_request_image_query_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery.from_dict(google_cloud_discoveryengine_v1alpha_search_request_image_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


