# ErrorsGroupModelCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** |  | [optional] 
**models** | [**List[ErrorsGroupModelCounts200ResponseModelsInner]**](ErrorsGroupModelCounts200ResponseModelsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.errors_group_model_counts200_response import ErrorsGroupModelCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupModelCounts200Response from a JSON string
errors_group_model_counts200_response_instance = ErrorsGroupModelCounts200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupModelCounts200Response.to_json())

# convert the object into a dict
errors_group_model_counts200_response_dict = errors_group_model_counts200_response_instance.to_dict()
# create an instance of ErrorsGroupModelCounts200Response from a dict
errors_group_model_counts200_response_from_dict = ErrorsGroupModelCounts200Response.from_dict(errors_group_model_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


