# SymmetricKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The primary key for the credential. | 
**secondary_key** | **str** | The secondary key for the credential. | 

## Example

```python
from openapi_client.models.symmetric_key import SymmetricKey

# TODO update the JSON string below
json = "{}"
# create an instance of SymmetricKey from a JSON string
symmetric_key_instance = SymmetricKey.from_json(json)
# print the JSON string representation of the object
print(SymmetricKey.to_json())

# convert the object into a dict
symmetric_key_dict = symmetric_key_instance.to_dict()
# create an instance of SymmetricKey from a dict
symmetric_key_from_dict = SymmetricKey.from_dict(symmetric_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


