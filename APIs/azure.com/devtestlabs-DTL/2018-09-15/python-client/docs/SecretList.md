# SecretList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Secret]**](Secret.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.secret_list import SecretList

# TODO update the JSON string below
json = "{}"
# create an instance of SecretList from a JSON string
secret_list_instance = SecretList.from_json(json)
# print the JSON string representation of the object
print(SecretList.to_json())

# convert the object into a dict
secret_list_dict = secret_list_instance.to_dict()
# create an instance of SecretList from a dict
secret_list_from_dict = SecretList.from_dict(secret_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


