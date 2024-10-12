# CheckPost200ResponseMatchesInnerContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | The length of the error in characters in the context. | 
**offset** | **int** | The 0-based character offset of the error in the context text. | 
**text** | **str** | Context of the error, i.e. the error and some text to the left and to the left. | 

## Example

```python
from openapi_client.models.check_post200_response_matches_inner_context import CheckPost200ResponseMatchesInnerContext

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200ResponseMatchesInnerContext from a JSON string
check_post200_response_matches_inner_context_instance = CheckPost200ResponseMatchesInnerContext.from_json(json)
# print the JSON string representation of the object
print(CheckPost200ResponseMatchesInnerContext.to_json())

# convert the object into a dict
check_post200_response_matches_inner_context_dict = check_post200_response_matches_inner_context_instance.to_dict()
# create an instance of CheckPost200ResponseMatchesInnerContext from a dict
check_post200_response_matches_inner_context_from_dict = CheckPost200ResponseMatchesInnerContext.from_dict(check_post200_response_matches_inner_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


