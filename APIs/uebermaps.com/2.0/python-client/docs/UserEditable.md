# UserEditable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** |  | [optional] 
**header** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**picture** | **str** |  | [optional] 
**screen_name** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_editable import UserEditable

# TODO update the JSON string below
json = "{}"
# create an instance of UserEditable from a JSON string
user_editable_instance = UserEditable.from_json(json)
# print the JSON string representation of the object
print(UserEditable.to_json())

# convert the object into a dict
user_editable_dict = user_editable_instance.to_dict()
# create an instance of UserEditable from a dict
user_editable_from_dict = UserEditable.from_dict(user_editable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


