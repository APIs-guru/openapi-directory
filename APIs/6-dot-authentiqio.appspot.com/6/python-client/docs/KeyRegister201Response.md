# KeyRegister201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | revoke key | [optional] 
**status** | **str** | registered | [optional] 

## Example

```python
from openapi_client.models.key_register201_response import KeyRegister201Response

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRegister201Response from a JSON string
key_register201_response_instance = KeyRegister201Response.from_json(json)
# print the JSON string representation of the object
print(KeyRegister201Response.to_json())

# convert the object into a dict
key_register201_response_dict = key_register201_response_instance.to_dict()
# create an instance of KeyRegister201Response from a dict
key_register201_response_from_dict = KeyRegister201Response.from_dict(key_register201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


