# RecommendationsListDefaultResponseErrorDetailsInner

Detailed errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendations_list_default_response_error_details_inner import RecommendationsListDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationsListDefaultResponseErrorDetailsInner from a JSON string
recommendations_list_default_response_error_details_inner_instance = RecommendationsListDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(RecommendationsListDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
recommendations_list_default_response_error_details_inner_dict = recommendations_list_default_response_error_details_inner_instance.to_dict()
# create an instance of RecommendationsListDefaultResponseErrorDetailsInner from a dict
recommendations_list_default_response_error_details_inner_from_dict = RecommendationsListDefaultResponseErrorDetailsInner.from_dict(recommendations_list_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


