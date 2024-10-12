# AddResourceMemberRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddResourceMemberRequestBody from a JSON string
add_resource_member_request_body_instance = AddResourceMemberRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddResourceMemberRequestBody.to_json())

# convert the object into a dict
add_resource_member_request_body_dict = add_resource_member_request_body_instance.to_dict()
# create an instance of AddResourceMemberRequestBody from a dict
add_resource_member_request_body_from_dict = AddResourceMemberRequestBody.from_dict(add_resource_member_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


