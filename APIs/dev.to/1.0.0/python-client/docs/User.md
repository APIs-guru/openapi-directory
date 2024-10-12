# User

The representation of a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_username** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**joined_at** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**profile_image** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**twitter_username** | **str** |  | [optional] 
**type_of** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


