# Automatic

A replication policy that replicates the Secret payload without any restrictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_managed_encryption** | [**CustomerManagedEncryption**](CustomerManagedEncryption.md) |  | [optional] 

## Example

```python
from openapi_client.models.automatic import Automatic

# TODO update the JSON string below
json = "{}"
# create an instance of Automatic from a JSON string
automatic_instance = Automatic.from_json(json)
# print the JSON string representation of the object
print(Automatic.to_json())

# convert the object into a dict
automatic_dict = automatic_instance.to_dict()
# create an instance of Automatic from a dict
automatic_from_dict = Automatic.from_dict(automatic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


