# SalesforceTable

Salesforce table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_profile** | **str** | Indicating whether this instance is profile. | [optional] 
**table_category** | **str** | The table category. | 
**table_name** | **str** | The name of the table. | 
**table_remarks** | **str** | The table remarks. | [optional] 
**table_schema** | **str** | The table schema. | 

## Example

```python
from openapi_client.models.salesforce_table import SalesforceTable

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceTable from a JSON string
salesforce_table_instance = SalesforceTable.from_json(json)
# print the JSON string representation of the object
print(SalesforceTable.to_json())

# convert the object into a dict
salesforce_table_dict = salesforce_table_instance.to_dict()
# create an instance of SalesforceTable from a dict
salesforce_table_from_dict = SalesforceTable.from_dict(salesforce_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


