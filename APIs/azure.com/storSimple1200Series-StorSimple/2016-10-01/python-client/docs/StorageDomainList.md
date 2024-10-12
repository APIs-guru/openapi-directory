# StorageDomainList

Collection of storage domains

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[StorageDomain]**](StorageDomain.md) | The value. | 

## Example

```python
from openapi_client.models.storage_domain_list import StorageDomainList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDomainList from a JSON string
storage_domain_list_instance = StorageDomainList.from_json(json)
# print the JSON string representation of the object
print(StorageDomainList.to_json())

# convert the object into a dict
storage_domain_list_dict = storage_domain_list_instance.to_dict()
# create an instance of StorageDomainList from a dict
storage_domain_list_from_dict = StorageDomainList.from_dict(storage_domain_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


