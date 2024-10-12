# PropertyContract

Property details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PropertyContractProperties**](PropertyContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.property_contract import PropertyContract

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyContract from a JSON string
property_contract_instance = PropertyContract.from_json(json)
# print the JSON string representation of the object
print(PropertyContract.to_json())

# convert the object into a dict
property_contract_dict = property_contract_instance.to_dict()
# create an instance of PropertyContract from a dict
property_contract_from_dict = PropertyContract.from_dict(property_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


