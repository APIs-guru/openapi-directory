# SecretAttributes

The secret management attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Creation time in seconds since 1970-01-01T00:00:00Z. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the object is enabled. | [optional] 
**exp** | **int** | Expiry date in seconds since 1970-01-01T00:00:00Z. | [optional] 
**nbf** | **int** | Not before date in seconds since 1970-01-01T00:00:00Z. | [optional] 
**updated** | **int** | Last updated time in seconds since 1970-01-01T00:00:00Z. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret_attributes import SecretAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SecretAttributes from a JSON string
secret_attributes_instance = SecretAttributes.from_json(json)
# print the JSON string representation of the object
print(SecretAttributes.to_json())

# convert the object into a dict
secret_attributes_dict = secret_attributes_instance.to_dict()
# create an instance of SecretAttributes from a dict
secret_attributes_from_dict = SecretAttributes.from_dict(secret_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


