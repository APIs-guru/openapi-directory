# User1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta_data** | **object** | The users&#39; meta data | [optional] 
**permissions** | [**Permission2**](Permission2.md) |  | [optional] 
**roles** | [**Roles**](Roles.md) |  | [optional] 
**user_identifier** | **str** | The users&#39; user identifier | [optional] 

## Example

```python
from openapi_client.models.user1 import User1

# TODO update the JSON string below
json = "{}"
# create an instance of User1 from a JSON string
user1_instance = User1.from_json(json)
# print the JSON string representation of the object
print(User1.to_json())

# convert the object into a dict
user1_dict = user1_instance.to_dict()
# create an instance of User1 from a dict
user1_from_dict = User1.from_dict(user1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


