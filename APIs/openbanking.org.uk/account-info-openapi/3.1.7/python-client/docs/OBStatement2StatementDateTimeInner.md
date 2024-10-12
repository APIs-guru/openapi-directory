# OBStatement2StatementDateTimeInner

Set of elements used to provide details of a generic date time for the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time** | **datetime** | Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**type** | **str** | Date time type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_date_time_inner import OBStatement2StatementDateTimeInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementDateTimeInner from a JSON string
ob_statement2_statement_date_time_inner_instance = OBStatement2StatementDateTimeInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementDateTimeInner.to_json())

# convert the object into a dict
ob_statement2_statement_date_time_inner_dict = ob_statement2_statement_date_time_inner_instance.to_dict()
# create an instance of OBStatement2StatementDateTimeInner from a dict
ob_statement2_statement_date_time_inner_from_dict = OBStatement2StatementDateTimeInner.from_dict(ob_statement2_statement_date_time_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


