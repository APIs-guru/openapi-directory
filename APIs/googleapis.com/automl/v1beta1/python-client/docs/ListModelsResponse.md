# ListModelsResponse

Response message for AutoMl.ListModels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | [**List[Model]**](Model.md) | List of models in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.list_models_response import ListModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelsResponse from a JSON string
list_models_response_instance = ListModelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListModelsResponse.to_json())

# convert the object into a dict
list_models_response_dict = list_models_response_instance.to_dict()
# create an instance of ListModelsResponse from a dict
list_models_response_from_dict = ListModelsResponse.from_dict(list_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


