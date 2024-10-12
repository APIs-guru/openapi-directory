# SingleUser

Wrapper for User Field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | User value as email. | [optional] 

## Example

```python
from openapi_client.models.single_user import SingleUser

# TODO update the JSON string below
json = "{}"
# create an instance of SingleUser from a JSON string
single_user_instance = SingleUser.from_json(json)
# print the JSON string representation of the object
print(SingleUser.to_json())

# convert the object into a dict
single_user_dict = single_user_instance.to_dict()
# create an instance of SingleUser from a dict
single_user_from_dict = SingleUser.from_dict(single_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


