# ErrorsGroupList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_groups** | [**List[ErrorsGroupList200ResponseErrorGroupsInner]**](ErrorsGroupList200ResponseErrorGroupsInner.md) |  | [optional] 
**next_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.errors_group_list200_response import ErrorsGroupList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupList200Response from a JSON string
errors_group_list200_response_instance = ErrorsGroupList200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupList200Response.to_json())

# convert the object into a dict
errors_group_list200_response_dict = errors_group_list200_response_instance.to_dict()
# create an instance of ErrorsGroupList200Response from a dict
errors_group_list200_response_from_dict = ErrorsGroupList200Response.from_dict(errors_group_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


