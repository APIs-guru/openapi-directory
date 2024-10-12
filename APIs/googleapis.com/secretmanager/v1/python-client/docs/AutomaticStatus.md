# AutomaticStatus

The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_managed_encryption** | [**CustomerManagedEncryptionStatus**](CustomerManagedEncryptionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.automatic_status import AutomaticStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticStatus from a JSON string
automatic_status_instance = AutomaticStatus.from_json(json)
# print the JSON string representation of the object
print(AutomaticStatus.to_json())

# convert the object into a dict
automatic_status_dict = automatic_status_instance.to_dict()
# create an instance of AutomaticStatus from a dict
automatic_status_from_dict = AutomaticStatus.from_dict(automatic_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


