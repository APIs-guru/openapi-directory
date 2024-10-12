# TableLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **str** |  | [optional] 
**data** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.table_links import TableLinks

# TODO update the JSON string below
json = "{}"
# create an instance of TableLinks from a JSON string
table_links_instance = TableLinks.from_json(json)
# print the JSON string representation of the object
print(TableLinks.to_json())

# convert the object into a dict
table_links_dict = table_links_instance.to_dict()
# create an instance of TableLinks from a dict
table_links_from_dict = TableLinks.from_dict(table_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


