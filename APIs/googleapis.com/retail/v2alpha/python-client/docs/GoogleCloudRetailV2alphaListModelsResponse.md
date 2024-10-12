# GoogleCloudRetailV2alphaListModelsResponse

Response to a ListModelRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[GoogleCloudRetailV2alphaModel]**](GoogleCloudRetailV2alphaModel.md) | List of Models. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_list_models_response import GoogleCloudRetailV2alphaListModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaListModelsResponse from a JSON string
google_cloud_retail_v2alpha_list_models_response_instance = GoogleCloudRetailV2alphaListModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaListModelsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_list_models_response_dict = google_cloud_retail_v2alpha_list_models_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaListModelsResponse from a dict
google_cloud_retail_v2alpha_list_models_response_from_dict = GoogleCloudRetailV2alphaListModelsResponse.from_dict(google_cloud_retail_v2alpha_list_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


