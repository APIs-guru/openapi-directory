# Domain

A registered domain resource in the Postmaster API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when the user registered this domain. Assigned by the server. | [optional] 
**name** | **str** | The resource name of the Domain. Domain names have the form &#x60;domains/{domain_name}&#x60;, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com). | [optional] 
**permission** | **str** | User’s permission for this domain. Assigned by the server. | [optional] 

## Example

```python
from openapi_client.models.domain import Domain

# TODO update the JSON string below
json = "{}"
# create an instance of Domain from a JSON string
domain_instance = Domain.from_json(json)
# print the JSON string representation of the object
print(Domain.to_json())

# convert the object into a dict
domain_dict = domain_instance.to_dict()
# create an instance of Domain from a dict
domain_from_dict = Domain.from_dict(domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


