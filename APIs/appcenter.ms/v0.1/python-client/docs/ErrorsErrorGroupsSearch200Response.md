# ErrorsErrorGroupsSearch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_groups** | [**List[ErrorsGroupList200ResponseErrorGroupsInner]**](ErrorsGroupList200ResponseErrorGroupsInner.md) |  | [optional] 
**has_more_results** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.errors_error_groups_search200_response import ErrorsErrorGroupsSearch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsErrorGroupsSearch200Response from a JSON string
errors_error_groups_search200_response_instance = ErrorsErrorGroupsSearch200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsErrorGroupsSearch200Response.to_json())

# convert the object into a dict
errors_error_groups_search200_response_dict = errors_error_groups_search200_response_instance.to_dict()
# create an instance of ErrorsErrorGroupsSearch200Response from a dict
errors_error_groups_search200_response_from_dict = ErrorsErrorGroupsSearch200Response.from_dict(errors_error_groups_search200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


