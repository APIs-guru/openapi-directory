# RecommendationsListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**RecommendationsListDefaultResponseError**](RecommendationsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.recommendations_list_default_response import RecommendationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationsListDefaultResponse from a JSON string
recommendations_list_default_response_instance = RecommendationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(RecommendationsListDefaultResponse.to_json())

# convert the object into a dict
recommendations_list_default_response_dict = recommendations_list_default_response_instance.to_dict()
# create an instance of RecommendationsListDefaultResponse from a dict
recommendations_list_default_response_from_dict = RecommendationsListDefaultResponse.from_dict(recommendations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


