# Void


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of the transaction to void. Must be equal to the original purchase amount. You can void purchases as well as pre-auths and returns. The amount you are voiding has to match the amount of that transaction. | 

## Example

```python
from openapi_client.models.void import Void

# TODO update the JSON string below
json = "{}"
# create an instance of Void from a JSON string
void_instance = Void.from_json(json)
# print the JSON string representation of the object
print(Void.to_json())

# convert the object into a dict
void_dict = void_instance.to_dict()
# create an instance of Void from a dict
void_from_dict = Void.from_dict(void_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


