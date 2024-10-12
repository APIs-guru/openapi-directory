# RecommendationsListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[RecommendationsListDefaultResponseErrorDetailsInner]**](RecommendationsListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendations_list_default_response_error import RecommendationsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationsListDefaultResponseError from a JSON string
recommendations_list_default_response_error_instance = RecommendationsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(RecommendationsListDefaultResponseError.to_json())

# convert the object into a dict
recommendations_list_default_response_error_dict = recommendations_list_default_response_error_instance.to_dict()
# create an instance of RecommendationsListDefaultResponseError from a dict
recommendations_list_default_response_error_from_dict = RecommendationsListDefaultResponseError.from_dict(recommendations_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


