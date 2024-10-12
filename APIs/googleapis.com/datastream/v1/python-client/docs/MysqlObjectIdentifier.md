# MysqlObjectIdentifier

Mysql data source object identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Required. The database name. | [optional] 
**table** | **str** | Required. The table name. | [optional] 

## Example

```python
from openapi_client.models.mysql_object_identifier import MysqlObjectIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlObjectIdentifier from a JSON string
mysql_object_identifier_instance = MysqlObjectIdentifier.from_json(json)
# print the JSON string representation of the object
print(MysqlObjectIdentifier.to_json())

# convert the object into a dict
mysql_object_identifier_dict = mysql_object_identifier_instance.to_dict()
# create an instance of MysqlObjectIdentifier from a dict
mysql_object_identifier_from_dict = MysqlObjectIdentifier.from_dict(mysql_object_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


