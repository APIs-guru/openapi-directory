# LinkedTaxRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Tax rate code | [optional] [readonly] 
**id** | **str** | The ID of the object. | [optional] 
**name** | **str** | Name of the tax rate | [optional] [readonly] 
**rate** | **float** | Rate of the tax rate | [optional] 

## Example

```python
from openapi_client.models.linked_tax_rate import LinkedTaxRate

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedTaxRate from a JSON string
linked_tax_rate_instance = LinkedTaxRate.from_json(json)
# print the JSON string representation of the object
print(LinkedTaxRate.to_json())

# convert the object into a dict
linked_tax_rate_dict = linked_tax_rate_instance.to_dict()
# create an instance of LinkedTaxRate from a dict
linked_tax_rate_from_dict = LinkedTaxRate.from_dict(linked_tax_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


