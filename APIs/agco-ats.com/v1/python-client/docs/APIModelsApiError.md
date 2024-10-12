# APIModelsApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_message** | **str** |  | [optional] 
**error_code** | **int** |  | [optional] 
**more_info** | **str** |  | [optional] 
**user_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_models_api_error import APIModelsApiError

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsApiError from a JSON string
api_models_api_error_instance = APIModelsApiError.from_json(json)
# print the JSON string representation of the object
print(APIModelsApiError.to_json())

# convert the object into a dict
api_models_api_error_dict = api_models_api_error_instance.to_dict()
# create an instance of APIModelsApiError from a dict
api_models_api_error_from_dict = APIModelsApiError.from_dict(api_models_api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


