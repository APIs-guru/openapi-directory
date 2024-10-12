# SecureString

Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Value of secure string. | 

## Example

```python
from openapi_client.models.secure_string import SecureString

# TODO update the JSON string below
json = "{}"
# create an instance of SecureString from a JSON string
secure_string_instance = SecureString.from_json(json)
# print the JSON string representation of the object
print(SecureString.to_json())

# convert the object into a dict
secure_string_dict = secure_string_instance.to_dict()
# create an instance of SecureString from a dict
secure_string_from_dict = SecureString.from_dict(secure_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


