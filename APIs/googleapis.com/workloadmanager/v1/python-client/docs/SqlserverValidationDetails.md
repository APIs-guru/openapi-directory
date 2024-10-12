# SqlserverValidationDetails

Message containing collected data names and values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **Dict[str, str]** | Required. Collected data is in format. | [optional] 

## Example

```python
from openapi_client.models.sqlserver_validation_details import SqlserverValidationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SqlserverValidationDetails from a JSON string
sqlserver_validation_details_instance = SqlserverValidationDetails.from_json(json)
# print the JSON string representation of the object
print(SqlserverValidationDetails.to_json())

# convert the object into a dict
sqlserver_validation_details_dict = sqlserver_validation_details_instance.to_dict()
# create an instance of SqlserverValidationDetails from a dict
sqlserver_validation_details_from_dict = SqlserverValidationDetails.from_dict(sqlserver_validation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


