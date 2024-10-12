# DomainSharedAccessKeys

Shared access keys of the Domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **str** | Shared access key1 for the domain. | [optional] 
**key2** | **str** | Shared access key2 for the domain. | [optional] 

## Example

```python
from openapi_client.models.domain_shared_access_keys import DomainSharedAccessKeys

# TODO update the JSON string below
json = "{}"
# create an instance of DomainSharedAccessKeys from a JSON string
domain_shared_access_keys_instance = DomainSharedAccessKeys.from_json(json)
# print the JSON string representation of the object
print(DomainSharedAccessKeys.to_json())

# convert the object into a dict
domain_shared_access_keys_dict = domain_shared_access_keys_instance.to_dict()
# create an instance of DomainSharedAccessKeys from a dict
domain_shared_access_keys_from_dict = DomainSharedAccessKeys.from_dict(domain_shared_access_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


