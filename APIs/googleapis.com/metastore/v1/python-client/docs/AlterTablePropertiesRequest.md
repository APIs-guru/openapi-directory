# AlterTablePropertiesRequest

Request message for DataprocMetastore.AlterTableProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | A map that describes the desired values to mutate. If update_mask is empty, the properties will not update. Otherwise, the properties only alters the value whose associated paths exist in the update mask | [optional] 
**table_name** | **str** | Required. The name of the table containing the properties you&#39;re altering in the following format.databases/{database_id}/tables/{table_id} | [optional] 
**update_mask** | **str** | A field mask that specifies the metadata table properties that are overwritten by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.For example, given the target properties: properties { a: 1 b: 2 } And an update properties: properties { a: 2 b: 3 c: 4 } then if the field mask is:paths: \&quot;properties.b\&quot;, \&quot;properties.c\&quot;then the result will be: properties { a: 1 b: 3 c: 4 }  | [optional] 

## Example

```python
from openapi_client.models.alter_table_properties_request import AlterTablePropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AlterTablePropertiesRequest from a JSON string
alter_table_properties_request_instance = AlterTablePropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(AlterTablePropertiesRequest.to_json())

# convert the object into a dict
alter_table_properties_request_dict = alter_table_properties_request_instance.to_dict()
# create an instance of AlterTablePropertiesRequest from a dict
alter_table_properties_request_from_dict = AlterTablePropertiesRequest.from_dict(alter_table_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


