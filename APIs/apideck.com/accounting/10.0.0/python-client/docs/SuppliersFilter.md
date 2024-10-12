# SuppliersFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Company Name of supplier to search for | [optional] 
**display_name** | **str** | Display Name of supplier to search for | [optional] 
**email** | **str** | Email of supplier to search for | [optional] 
**first_name** | **str** | First name of supplier to search for | [optional] 
**last_name** | **str** | Last name of supplier to search for | [optional] 

## Example

```python
from openapi_client.models.suppliers_filter import SuppliersFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SuppliersFilter from a JSON string
suppliers_filter_instance = SuppliersFilter.from_json(json)
# print the JSON string representation of the object
print(SuppliersFilter.to_json())

# convert the object into a dict
suppliers_filter_dict = suppliers_filter_instance.to_dict()
# create an instance of SuppliersFilter from a dict
suppliers_filter_from_dict = SuppliersFilter.from_dict(suppliers_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


