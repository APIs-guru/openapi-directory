# EnterpriseCrmLoggingGwsFieldLimits

Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_action** | **str** |  | [optional] 
**log_type** | **List[str]** | To which type(s) of logs the limits apply. | [optional] 
**max_array_size** | **int** | maximum array size. If the array exceds this size, the field (list) is truncated. | [optional] 
**max_string_length** | **int** | maximum string length. If the field exceeds this amount the field is shortened. | [optional] 
**shortener_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_logging_gws_field_limits import EnterpriseCrmLoggingGwsFieldLimits

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmLoggingGwsFieldLimits from a JSON string
enterprise_crm_logging_gws_field_limits_instance = EnterpriseCrmLoggingGwsFieldLimits.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmLoggingGwsFieldLimits.to_json())

# convert the object into a dict
enterprise_crm_logging_gws_field_limits_dict = enterprise_crm_logging_gws_field_limits_instance.to_dict()
# create an instance of EnterpriseCrmLoggingGwsFieldLimits from a dict
enterprise_crm_logging_gws_field_limits_from_dict = EnterpriseCrmLoggingGwsFieldLimits.from_dict(enterprise_crm_logging_gws_field_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


