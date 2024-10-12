# UserDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_describe import UserDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of UserDescribe from a JSON string
user_describe_instance = UserDescribe.from_json(json)
# print the JSON string representation of the object
print(UserDescribe.to_json())

# convert the object into a dict
user_describe_dict = user_describe_instance.to_dict()
# create an instance of UserDescribe from a dict
user_describe_from_dict = UserDescribe.from_dict(user_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


