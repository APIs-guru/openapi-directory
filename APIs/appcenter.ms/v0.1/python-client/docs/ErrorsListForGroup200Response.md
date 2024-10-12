# ErrorsListForGroup200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorsListForGroup200ResponseErrorsInner]**](ErrorsListForGroup200ResponseErrorsInner.md) | Errors list. | [optional] 
**next_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.errors_list_for_group200_response import ErrorsListForGroup200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsListForGroup200Response from a JSON string
errors_list_for_group200_response_instance = ErrorsListForGroup200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsListForGroup200Response.to_json())

# convert the object into a dict
errors_list_for_group200_response_dict = errors_list_for_group200_response_instance.to_dict()
# create an instance of ErrorsListForGroup200Response from a dict
errors_list_for_group200_response_from_dict = ErrorsListForGroup200Response.from_dict(errors_list_for_group200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


