# GoogleCloudRetailV2betaListControlsResponse

Response for ListControls method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controls** | [**List[GoogleCloudRetailV2betaControl]**](GoogleCloudRetailV2betaControl.md) | All the Controls for a given catalog. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_list_controls_response import GoogleCloudRetailV2betaListControlsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaListControlsResponse from a JSON string
google_cloud_retail_v2beta_list_controls_response_instance = GoogleCloudRetailV2betaListControlsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaListControlsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_list_controls_response_dict = google_cloud_retail_v2beta_list_controls_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaListControlsResponse from a dict
google_cloud_retail_v2beta_list_controls_response_from_dict = GoogleCloudRetailV2betaListControlsResponse.from_dict(google_cloud_retail_v2beta_list_controls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


