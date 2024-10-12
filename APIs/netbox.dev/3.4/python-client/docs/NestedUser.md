# NestedUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 
**username** | **str** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | 

## Example

```python
from openapi_client.models.nested_user import NestedUser

# TODO update the JSON string below
json = "{}"
# create an instance of NestedUser from a JSON string
nested_user_instance = NestedUser.from_json(json)
# print the JSON string representation of the object
print(NestedUser.to_json())

# convert the object into a dict
nested_user_dict = nested_user_instance.to_dict()
# create an instance of NestedUser from a dict
nested_user_from_dict = NestedUser.from_dict(nested_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


