# MysqlLogPosition

MySQL log position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_file** | **str** | Required. The binary log file name. | [optional] 
**log_position** | **int** | Optional. The position within the binary log file. Default is head of file. | [optional] 

## Example

```python
from openapi_client.models.mysql_log_position import MysqlLogPosition

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlLogPosition from a JSON string
mysql_log_position_instance = MysqlLogPosition.from_json(json)
# print the JSON string representation of the object
print(MysqlLogPosition.to_json())

# convert the object into a dict
mysql_log_position_dict = mysql_log_position_instance.to_dict()
# create an instance of MysqlLogPosition from a dict
mysql_log_position_from_dict = MysqlLogPosition.from_dict(mysql_log_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


