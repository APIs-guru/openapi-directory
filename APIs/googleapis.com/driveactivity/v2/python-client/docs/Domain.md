# Domain

Information about a domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_id** | **str** | An opaque string used to identify this domain. | [optional] 
**name** | **str** | The name of the domain, e.g. &#x60;google.com&#x60;. | [optional] 

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


