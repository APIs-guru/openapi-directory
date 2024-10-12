# AddressesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the customer | [optional] 
**country** | **str** | Country of the customer | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**line1** | **str** | First line of the street address of the customer | [optional] 
**line2** | **str** | Second line of the street address of the customer | [optional] 
**postal_code** | **str** | Postal code of the customer | [optional] 
**state** | **str** | State of the customer | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.addresses_inner import AddressesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddressesInner from a JSON string
addresses_inner_instance = AddressesInner.from_json(json)
# print the JSON string representation of the object
print(AddressesInner.to_json())

# convert the object into a dict
addresses_inner_dict = addresses_inner_instance.to_dict()
# create an instance of AddressesInner from a dict
addresses_inner_from_dict = AddressesInner.from_dict(addresses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


