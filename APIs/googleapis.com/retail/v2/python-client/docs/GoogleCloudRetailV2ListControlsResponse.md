# GoogleCloudRetailV2ListControlsResponse

Response for ListControls method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controls** | [**List[GoogleCloudRetailV2Control]**](GoogleCloudRetailV2Control.md) | All the Controls for a given catalog. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_list_controls_response import GoogleCloudRetailV2ListControlsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ListControlsResponse from a JSON string
google_cloud_retail_v2_list_controls_response_instance = GoogleCloudRetailV2ListControlsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ListControlsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_list_controls_response_dict = google_cloud_retail_v2_list_controls_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2ListControlsResponse from a dict
google_cloud_retail_v2_list_controls_response_from_dict = GoogleCloudRetailV2ListControlsResponse.from_dict(google_cloud_retail_v2_list_controls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


