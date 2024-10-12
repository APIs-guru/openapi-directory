# CheckPost200ResponseMatchesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**CheckPost200ResponseMatchesInnerContext**](CheckPost200ResponseMatchesInnerContext.md) |  | 
**length** | **int** | The length of the error in characters. | 
**message** | **str** | Message about the error displayed to the user. | 
**offset** | **int** | The 0-based character offset of the error in the text. | 
**replacements** | [**List[CheckPost200ResponseMatchesInnerReplacementsInner]**](CheckPost200ResponseMatchesInnerReplacementsInner.md) | Replacements that might correct the error. The array can be empty, in this case there is no suggested replacement. | 
**rule** | [**CheckPost200ResponseMatchesInnerRule**](CheckPost200ResponseMatchesInnerRule.md) |  | [optional] 
**sentence** | **str** | The sentence the error occurred in (since LanguageTool 4.0 or later) | 
**short_message** | **str** | An optional shorter version of &#39;message&#39;. | [optional] 

## Example

```python
from openapi_client.models.check_post200_response_matches_inner import CheckPost200ResponseMatchesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200ResponseMatchesInner from a JSON string
check_post200_response_matches_inner_instance = CheckPost200ResponseMatchesInner.from_json(json)
# print the JSON string representation of the object
print(CheckPost200ResponseMatchesInner.to_json())

# convert the object into a dict
check_post200_response_matches_inner_dict = check_post200_response_matches_inner_instance.to_dict()
# create an instance of CheckPost200ResponseMatchesInner from a dict
check_post200_response_matches_inner_from_dict = CheckPost200ResponseMatchesInner.from_dict(check_post200_response_matches_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


