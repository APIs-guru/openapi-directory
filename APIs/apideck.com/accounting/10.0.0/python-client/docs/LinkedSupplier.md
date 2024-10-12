# LinkedSupplier

The supplier this entity is linked to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**company_name** | **str** | The company name of the supplier. | [optional] [readonly] 
**display_id** | **str** | The display ID of the supplier. | [optional] [readonly] 
**display_name** | **str** | The display name of the supplier. | [optional] 
**id** | **str** | The ID of the supplier this entity is linked to. | 

## Example

```python
from openapi_client.models.linked_supplier import LinkedSupplier

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedSupplier from a JSON string
linked_supplier_instance = LinkedSupplier.from_json(json)
# print the JSON string representation of the object
print(LinkedSupplier.to_json())

# convert the object into a dict
linked_supplier_dict = linked_supplier_instance.to_dict()
# create an instance of LinkedSupplier from a dict
linked_supplier_from_dict = LinkedSupplier.from_dict(linked_supplier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


