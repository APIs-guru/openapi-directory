# ResponseWithContinuationUser

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[User]**](User.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_user import ResponseWithContinuationUser

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationUser from a JSON string
response_with_continuation_user_instance = ResponseWithContinuationUser.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationUser.to_json())

# convert the object into a dict
response_with_continuation_user_dict = response_with_continuation_user_instance.to_dict()
# create an instance of ResponseWithContinuationUser from a dict
response_with_continuation_user_from_dict = ResponseWithContinuationUser.from_dict(response_with_continuation_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


