# Routine

A user-defined function or a stored procedure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**List[Argument]**](Argument.md) | Optional. | [optional] 
**creation_time** | **str** | Output only. The time when this routine was created, in milliseconds since the epoch. | [optional] [readonly] 
**data_governance_type** | **str** | Optional. If set to &#x60;DATA_MASKING&#x60;, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask). | [optional] 
**definition_body** | **str** | Required. The body of the routine. For functions, this is the expression in the AS clause. If language&#x3D;SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: &#x60;CREATE FUNCTION JoinLines(x string, y string) as (concat(x, \&quot;\\n\&quot;, y))&#x60; The definition_body is &#x60;concat(x, \&quot;\\n\&quot;, y)&#x60; (\\n is not replaced with linebreak). If language&#x3D;JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: &#x60;CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS &#39;return \&quot;\\n\&quot;;\\n&#39;&#x60; The definition_body is &#x60;return \&quot;\\n\&quot;;\\n&#x60; Note that both \\n are replaced with linebreaks. | [optional] 
**description** | **str** | Optional. The description of the routine, if defined. | [optional] 
**determinism_level** | **str** | Optional. The determinism level of the JavaScript UDF, if defined. | [optional] 
**etag** | **str** | Output only. A hash of this resource. | [optional] [readonly] 
**imported_libraries** | **List[str]** | Optional. If language &#x3D; \&quot;JAVASCRIPT\&quot;, this field stores the path of the imported JAVASCRIPT libraries. | [optional] 
**language** | **str** | Optional. Defaults to \&quot;SQL\&quot; if remote_function_options field is absent, not set otherwise. | [optional] 
**last_modified_time** | **str** | Output only. The time when this routine was last modified, in milliseconds since the epoch. | [optional] [readonly] 
**remote_function_options** | [**RemoteFunctionOptions**](RemoteFunctionOptions.md) |  | [optional] 
**return_table_type** | [**StandardSqlTableType**](StandardSqlTableType.md) |  | [optional] 
**return_type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 
**routine_reference** | [**RoutineReference**](RoutineReference.md) |  | [optional] 
**routine_type** | **str** | Required. The type of routine. | [optional] 
**security_mode** | **str** | Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine&#39;s configuration. | [optional] 
**spark_options** | [**SparkOptions**](SparkOptions.md) |  | [optional] 
**strict_mode** | **bool** | Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn&#39;t guarantee that the procedure will successfully execute at runtime. If &#x60;strictMode&#x60; is set to &#x60;TRUE&#x60;, the procedure body is further checked for errors such as non-existent tables or columns. The &#x60;CREATE PROCEDURE&#x60; statement fails if the body fails any of these checks. If &#x60;strictMode&#x60; is set to &#x60;FALSE&#x60;, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify &#x60;strictMode&#x3D;FALSE&#x60; to avoid non-existent procedure errors during validation. Default value is &#x60;TRUE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.routine import Routine

# TODO update the JSON string below
json = "{}"
# create an instance of Routine from a JSON string
routine_instance = Routine.from_json(json)
# print the JSON string representation of the object
print(Routine.to_json())

# convert the object into a dict
routine_dict = routine_instance.to_dict()
# create an instance of Routine from a dict
routine_from_dict = Routine.from_dict(routine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


