# DomainRegenerateKeyRequest

Domain regenerate share access key request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Key name to regenerate key1 or key2. | 

## Example

```python
from openapi_client.models.domain_regenerate_key_request import DomainRegenerateKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegenerateKeyRequest from a JSON string
domain_regenerate_key_request_instance = DomainRegenerateKeyRequest.from_json(json)
# print the JSON string representation of the object
print(DomainRegenerateKeyRequest.to_json())

# convert the object into a dict
domain_regenerate_key_request_dict = domain_regenerate_key_request_instance.to_dict()
# create an instance of DomainRegenerateKeyRequest from a dict
domain_regenerate_key_request_from_dict = DomainRegenerateKeyRequest.from_dict(domain_regenerate_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


