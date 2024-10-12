# ExchangerOrganizationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Organization ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exchanger_organization_data import ExchangerOrganizationData

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangerOrganizationData from a JSON string
exchanger_organization_data_instance = ExchangerOrganizationData.from_json(json)
# print the JSON string representation of the object
print(ExchangerOrganizationData.to_json())

# convert the object into a dict
exchanger_organization_data_dict = exchanger_organization_data_instance.to_dict()
# create an instance of ExchangerOrganizationData from a dict
exchanger_organization_data_from_dict = ExchangerOrganizationData.from_dict(exchanger_organization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


