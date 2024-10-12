# DdlName

A Data Lake Analytics DDL name item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_part** | **str** | the name of the table associated with this database and schema. | [optional] 
**second_part** | **str** | the name of the table associated with this database and schema. | [optional] 
**server** | **str** | the name of the table associated with this database and schema. | [optional] 
**third_part** | **str** | the name of the table associated with this database and schema. | [optional] 

## Example

```python
from openapi_client.models.ddl_name import DdlName

# TODO update the JSON string below
json = "{}"
# create an instance of DdlName from a JSON string
ddl_name_instance = DdlName.from_json(json)
# print the JSON string representation of the object
print(DdlName.to_json())

# convert the object into a dict
ddl_name_dict = ddl_name_instance.to_dict()
# create an instance of DdlName from a dict
ddl_name_from_dict = DdlName.from_dict(ddl_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


