# DomainId

Domain ID of Gmail phishing alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_primary_domain** | **str** | The primary domain for the customer. | [optional] 

## Example

```python
from openapi_client.models.domain_id import DomainId

# TODO update the JSON string below
json = "{}"
# create an instance of DomainId from a JSON string
domain_id_instance = DomainId.from_json(json)
# print the JSON string representation of the object
print(DomainId.to_json())

# convert the object into a dict
domain_id_dict = domain_id_instance.to_dict()
# create an instance of DomainId from a dict
domain_id_from_dict = DomainId.from_dict(domain_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


