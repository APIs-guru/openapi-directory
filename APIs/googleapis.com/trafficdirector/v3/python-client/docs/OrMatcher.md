# OrMatcher

Specifies a list of alternatives for the match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value_matchers** | [**List[ValueMatcher]**](ValueMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.or_matcher import OrMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of OrMatcher from a JSON string
or_matcher_instance = OrMatcher.from_json(json)
# print the JSON string representation of the object
print(OrMatcher.to_json())

# convert the object into a dict
or_matcher_dict = or_matcher_instance.to_dict()
# create an instance of OrMatcher from a dict
or_matcher_from_dict = OrMatcher.from_dict(or_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


