# DataProtection

DataProtection volume, can have a replication object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replication** | [**ReplicationObject**](ReplicationObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_protection import DataProtection

# TODO update the JSON string below
json = "{}"
# create an instance of DataProtection from a JSON string
data_protection_instance = DataProtection.from_json(json)
# print the JSON string representation of the object
print(DataProtection.to_json())

# convert the object into a dict
data_protection_dict = data_protection_instance.to_dict()
# create an instance of DataProtection from a dict
data_protection_from_dict = DataProtection.from_dict(data_protection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


