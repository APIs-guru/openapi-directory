# GoogleCloudRetailV2alphaListControlsResponse

Response for ListControls method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controls** | [**List[GoogleCloudRetailV2alphaControl]**](GoogleCloudRetailV2alphaControl.md) | All the Controls for a given catalog. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_list_controls_response import GoogleCloudRetailV2alphaListControlsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaListControlsResponse from a JSON string
google_cloud_retail_v2alpha_list_controls_response_instance = GoogleCloudRetailV2alphaListControlsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaListControlsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_list_controls_response_dict = google_cloud_retail_v2alpha_list_controls_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaListControlsResponse from a dict
google_cloud_retail_v2alpha_list_controls_response_from_dict = GoogleCloudRetailV2alphaListControlsResponse.from_dict(google_cloud_retail_v2alpha_list_controls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


