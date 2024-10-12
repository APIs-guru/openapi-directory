# CreateUserInGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[str]** |  | [optional] 
**profile** | [**CreateUserInGroupRequestProfile**](CreateUserInGroupRequestProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_user_in_group_request import CreateUserInGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUserInGroupRequest from a JSON string
create_user_in_group_request_instance = CreateUserInGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUserInGroupRequest.to_json())

# convert the object into a dict
create_user_in_group_request_dict = create_user_in_group_request_instance.to_dict()
# create an instance of CreateUserInGroupRequest from a dict
create_user_in_group_request_from_dict = CreateUserInGroupRequest.from_dict(create_user_in_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


