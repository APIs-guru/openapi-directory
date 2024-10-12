# ReplaceAccessLevelsResponse

A response to ReplaceAccessLevelsRequest. This will be put inside of Operation.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_levels** | [**List[AccessLevel]**](AccessLevel.md) | List of the Access Level instances. | [optional] 

## Example

```python
from openapi_client.models.replace_access_levels_response import ReplaceAccessLevelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAccessLevelsResponse from a JSON string
replace_access_levels_response_instance = ReplaceAccessLevelsResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceAccessLevelsResponse.to_json())

# convert the object into a dict
replace_access_levels_response_dict = replace_access_levels_response_instance.to_dict()
# create an instance of ReplaceAccessLevelsResponse from a dict
replace_access_levels_response_from_dict = ReplaceAccessLevelsResponse.from_dict(replace_access_levels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


