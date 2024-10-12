# AddMemberBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The role of the user, \&quot;admin\&quot; or \&quot;collaborator\&quot;. | [optional] 
**user_id** | **str** | The id of the user. | [optional] 

## Example

```python
from openapi_client.models.add_member_body import AddMemberBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddMemberBody from a JSON string
add_member_body_instance = AddMemberBody.from_json(json)
# print the JSON string representation of the object
print(AddMemberBody.to_json())

# convert the object into a dict
add_member_body_dict = add_member_body_instance.to_dict()
# create an instance of AddMemberBody from a dict
add_member_body_from_dict = AddMemberBody.from_dict(add_member_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


