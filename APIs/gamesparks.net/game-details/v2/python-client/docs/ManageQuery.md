# ManageQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**es_rules** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**qb_rules** | **str** |  | [optional] 
**short_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.manage_query import ManageQuery

# TODO update the JSON string below
json = "{}"
# create an instance of ManageQuery from a JSON string
manage_query_instance = ManageQuery.from_json(json)
# print the JSON string representation of the object
print(ManageQuery.to_json())

# convert the object into a dict
manage_query_dict = manage_query_instance.to_dict()
# create an instance of ManageQuery from a dict
manage_query_from_dict = ManageQuery.from_dict(manage_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


