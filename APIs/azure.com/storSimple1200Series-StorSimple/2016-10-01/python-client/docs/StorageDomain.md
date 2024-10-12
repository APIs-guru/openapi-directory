# StorageDomain

The storage domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageDomainProperties**](StorageDomainProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_domain import StorageDomain

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDomain from a JSON string
storage_domain_instance = StorageDomain.from_json(json)
# print the JSON string representation of the object
print(StorageDomain.to_json())

# convert the object into a dict
storage_domain_dict = storage_domain_instance.to_dict()
# create an instance of StorageDomain from a dict
storage_domain_from_dict = StorageDomain.from_dict(storage_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


