# UpdateUserPartialRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | User ID to update | 
**set** | **Dict[str, object]** |  | 
**unset** | **List[str]** |  | 

## Example

```python
from openapi_client.models.update_user_partial_request import UpdateUserPartialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserPartialRequest from a JSON string
update_user_partial_request_instance = UpdateUserPartialRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserPartialRequest.to_json())

# convert the object into a dict
update_user_partial_request_dict = update_user_partial_request_instance.to_dict()
# create an instance of UpdateUserPartialRequest from a dict
update_user_partial_request_from_dict = UpdateUserPartialRequest.from_dict(update_user_partial_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


