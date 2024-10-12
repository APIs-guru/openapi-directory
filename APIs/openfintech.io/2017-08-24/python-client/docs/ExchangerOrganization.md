# ExchangerOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ExchangerOrganizationData**](ExchangerOrganizationData.md) |  | [optional] 
**links** | [**ExchangerOrganizationLinks**](ExchangerOrganizationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.exchanger_organization import ExchangerOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangerOrganization from a JSON string
exchanger_organization_instance = ExchangerOrganization.from_json(json)
# print the JSON string representation of the object
print(ExchangerOrganization.to_json())

# convert the object into a dict
exchanger_organization_dict = exchanger_organization_instance.to_dict()
# create an instance of ExchangerOrganization from a dict
exchanger_organization_from_dict = ExchangerOrganization.from_dict(exchanger_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


