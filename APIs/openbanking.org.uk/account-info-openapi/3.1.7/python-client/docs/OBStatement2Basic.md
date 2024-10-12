# OBStatement2Basic

Provides further details on a statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**creation_date_time** | **datetime** | Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**end_date_time** | **datetime** | Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**start_date_time** | **datetime** | Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**statement_benefit** | [**List[OBStatement2StatementBenefitInner]**](OBStatement2StatementBenefitInner.md) |  | [optional] 
**statement_date_time** | [**List[OBStatement2StatementDateTimeInner]**](OBStatement2StatementDateTimeInner.md) |  | [optional] 
**statement_description** | **List[str]** |  | [optional] 
**statement_fee** | [**List[OBStatement2StatementFeeInner]**](OBStatement2StatementFeeInner.md) |  | [optional] 
**statement_id** | **str** | Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable. | [optional] 
**statement_interest** | [**List[OBStatement2StatementInterestInner]**](OBStatement2StatementInterestInner.md) |  | [optional] 
**statement_rate** | [**List[OBStatement2StatementRateInner]**](OBStatement2StatementRateInner.md) |  | [optional] 
**statement_reference** | **str** | Unique reference for the statement. This reference may be optionally populated if available. | [optional] 
**statement_value** | [**List[OBStatement2StatementValueInner]**](OBStatement2StatementValueInner.md) |  | [optional] 
**type** | [**OBExternalStatementType1Code**](OBExternalStatementType1Code.md) |  | 

## Example

```python
from openapi_client.models.ob_statement2_basic import OBStatement2Basic

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2Basic from a JSON string
ob_statement2_basic_instance = OBStatement2Basic.from_json(json)
# print the JSON string representation of the object
print(OBStatement2Basic.to_json())

# convert the object into a dict
ob_statement2_basic_dict = ob_statement2_basic_instance.to_dict()
# create an instance of OBStatement2Basic from a dict
ob_statement2_basic_from_dict = OBStatement2Basic.from_dict(ob_statement2_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


