# UserCreationWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.user_creation_write import UserCreationWrite

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreationWrite from a JSON string
user_creation_write_instance = UserCreationWrite.from_json(json)
# print the JSON string representation of the object
print(UserCreationWrite.to_json())

# convert the object into a dict
user_creation_write_dict = user_creation_write_instance.to_dict()
# create an instance of UserCreationWrite from a dict
user_creation_write_from_dict = UserCreationWrite.from_dict(user_creation_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


