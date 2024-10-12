# TableFieldSchema

A field in TableSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**TableFieldSchemaCategories**](TableFieldSchemaCategories.md) |  | [optional] 
**collation** | **str** | Optional. Field collation can be set only when the type of field is STRING. The following values are supported: * &#39;und:ci&#39;: undetermined locale, case insensitive. * &#39;&#39;: empty string. Default to case-sensitive behavior. | [optional] 
**default_value_expression** | **str** | Optional. A SQL expression to specify the [default value] (https://cloud.google.com/bigquery/docs/default-values) for this field. | [optional] 
**description** | **str** | Optional. The field description. The maximum length is 1,024 characters. | [optional] 
**fields** | [**List[TableFieldSchema]**](TableFieldSchema.md) | Optional. Describes the nested schema fields if the type property is set to RECORD. | [optional] 
**max_length** | **str** | Optional. Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type &#x3D; \&quot;STRING\&quot;, then max_length represents the maximum UTF-8 length of strings in this field. If type &#x3D; \&quot;BYTES\&quot;, then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ \&quot;STRING\&quot; and ≠ \&quot;BYTES\&quot;. | [optional] 
**mode** | **str** | Optional. The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. | [optional] 
**name** | **str** | Required. The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters. | [optional] 
**policy_tags** | [**TableFieldSchemaPolicyTags**](TableFieldSchemaPolicyTags.md) |  | [optional] 
**precision** | **str** | Optional. Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ \&quot;NUMERIC\&quot; and ≠ \&quot;BIGNUMERIC\&quot;. If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type &#x3D; \&quot;NUMERIC\&quot;: 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type &#x3D; \&quot;BIGNUMERIC\&quot;: 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): * If type &#x3D; \&quot;NUMERIC\&quot;: 1 ≤ precision ≤ 29. * If type &#x3D; \&quot;BIGNUMERIC\&quot;: 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid. | [optional] 
**range_element_type** | [**TableFieldSchemaRangeElementType**](TableFieldSchemaRangeElementType.md) |  | [optional] 
**rounding_mode** | **str** | Optional. Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type. | [optional] 
**scale** | **str** | Optional. See documentation for precision. | [optional] 
**type** | **str** | Required. The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) Use of RECORD/STRUCT indicates that the field contains a nested schema. | [optional] 

## Example

```python
from openapi_client.models.table_field_schema import TableFieldSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TableFieldSchema from a JSON string
table_field_schema_instance = TableFieldSchema.from_json(json)
# print the JSON string representation of the object
print(TableFieldSchema.to_json())

# convert the object into a dict
table_field_schema_dict = table_field_schema_instance.to_dict()
# create an instance of TableFieldSchema from a dict
table_field_schema_from_dict = TableFieldSchema.from_dict(table_field_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


