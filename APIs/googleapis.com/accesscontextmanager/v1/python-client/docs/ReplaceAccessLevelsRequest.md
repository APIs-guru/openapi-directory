# ReplaceAccessLevelsRequest

A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_levels** | [**List[AccessLevel]**](AccessLevel.md) | Required. The desired Access Levels that should replace all existing Access Levels in the Access Policy. | [optional] 
**etag** | **str** | Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. | [optional] 

## Example

```python
from openapi_client.models.replace_access_levels_request import ReplaceAccessLevelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAccessLevelsRequest from a JSON string
replace_access_levels_request_instance = ReplaceAccessLevelsRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceAccessLevelsRequest.to_json())

# convert the object into a dict
replace_access_levels_request_dict = replace_access_levels_request_instance.to_dict()
# create an instance of ReplaceAccessLevelsRequest from a dict
replace_access_levels_request_from_dict = ReplaceAccessLevelsRequest.from_dict(replace_access_levels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


