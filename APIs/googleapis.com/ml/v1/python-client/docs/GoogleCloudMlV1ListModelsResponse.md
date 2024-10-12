# GoogleCloudMlV1ListModelsResponse

Response message for the ListModels method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[GoogleCloudMlV1Model]**](GoogleCloudMlV1Model.md) | The list of models. | [optional] 
**next_page_token** | **str** | Optional. Pass this token as the &#x60;page_token&#x60; field of the request for a subsequent call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_models_response import GoogleCloudMlV1ListModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListModelsResponse from a JSON string
google_cloud_ml_v1_list_models_response_instance = GoogleCloudMlV1ListModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListModelsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_models_response_dict = google_cloud_ml_v1_list_models_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListModelsResponse from a dict
google_cloud_ml_v1_list_models_response_from_dict = GoogleCloudMlV1ListModelsResponse.from_dict(google_cloud_ml_v1_list_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


