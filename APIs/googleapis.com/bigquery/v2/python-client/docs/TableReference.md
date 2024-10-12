# TableReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. The ID of the dataset containing this table. | [optional] 
**project_id** | **str** | Required. The ID of the project containing this table. | [optional] 
**table_id** | **str** | Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as &#x60;sample_table$20190123&#x60;. | [optional] 

## Example

```python
from openapi_client.models.table_reference import TableReference

# TODO update the JSON string below
json = "{}"
# create an instance of TableReference from a JSON string
table_reference_instance = TableReference.from_json(json)
# print the JSON string representation of the object
print(TableReference.to_json())

# convert the object into a dict
table_reference_dict = table_reference_instance.to_dict()
# create an instance of TableReference from a dict
table_reference_from_dict = TableReference.from_dict(table_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


