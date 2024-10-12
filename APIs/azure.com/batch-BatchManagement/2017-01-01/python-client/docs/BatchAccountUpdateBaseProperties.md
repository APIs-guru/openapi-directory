# BatchAccountUpdateBaseProperties

The properties for a Batch account update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_storage** | [**AutoStorageBaseProperties**](AutoStorageBaseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_account_update_base_properties import BatchAccountUpdateBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountUpdateBaseProperties from a JSON string
batch_account_update_base_properties_instance = BatchAccountUpdateBaseProperties.from_json(json)
# print the JSON string representation of the object
print(BatchAccountUpdateBaseProperties.to_json())

# convert the object into a dict
batch_account_update_base_properties_dict = batch_account_update_base_properties_instance.to_dict()
# create an instance of BatchAccountUpdateBaseProperties from a dict
batch_account_update_base_properties_from_dict = BatchAccountUpdateBaseProperties.from_dict(batch_account_update_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


