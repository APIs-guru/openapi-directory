# SqlserverValidationValidationDetail

Message describing the Sqlserver validation metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[SqlserverValidationDetails]**](SqlserverValidationDetails.md) | Required. Details wraps map that represents collected data names and values. | [optional] 
**type** | **str** | Optional. The Sqlserver system that the validation data is from. | [optional] 

## Example

```python
from openapi_client.models.sqlserver_validation_validation_detail import SqlserverValidationValidationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SqlserverValidationValidationDetail from a JSON string
sqlserver_validation_validation_detail_instance = SqlserverValidationValidationDetail.from_json(json)
# print the JSON string representation of the object
print(SqlserverValidationValidationDetail.to_json())

# convert the object into a dict
sqlserver_validation_validation_detail_dict = sqlserver_validation_validation_detail_instance.to_dict()
# create an instance of SqlserverValidationValidationDetail from a dict
sqlserver_validation_validation_detail_from_dict = SqlserverValidationValidationDetail.from_dict(sqlserver_validation_validation_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


