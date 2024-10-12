# CustomFieldContextDefaultValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cascading_option_id** | **str** | The ID of the default cascading option. | [optional] 
**context_id** | **str** | The ID of the context. | 
**option_id** | **str** | The ID of the default option. | 
**type** | **str** |  | 
**option_ids** | **List[str]** | The list of IDs of the default options. | 
**account_id** | **str** | The ID of the default user. | 
**user_filter** | [**UserFilter**](UserFilter.md) |  | 
**account_ids** | **List[str]** | The IDs of the default users. | 
**group_id** | **str** | The ID of the the default group. | 
**group_ids** | **List[str]** | The IDs of the default groups. | 
**var_date** | **str** | The default date in ISO format. Ignored if &#x60;useCurrent&#x60; is true. | [optional] 
**use_current** | **bool** | Whether to use the current date. | [optional] [default to False]
**date_time** | **str** | The default date-time in ISO format. Ignored if &#x60;useCurrent&#x60; is true. | [optional] 
**url** | **str** | The default URL. | 
**project_id** | **str** | The ID of the default project. | 
**number** | **float** | The default floating-point number. | 
**labels** | **List[str]** | The default labels value. | 
**text** | **str** | The default text. The maximum length is 254 characters. | [optional] 
**version_id** | **str** | The ID of the default version. | 
**version_order** | **str** | The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are &#x60;\&quot;releasedFirst\&quot;&#x60; and &#x60;\&quot;unreleasedFirst\&quot;&#x60;. | [optional] 
**version_ids** | **List[str]** | The IDs of the default versions. | 
**values** | **List[str]** | List of string values. The maximum length for a value is 254 characters. | [optional] 
**object** | **object** | The default JSON object. | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_default_value import CustomFieldContextDefaultValue

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValue from a JSON string
custom_field_context_default_value_instance = CustomFieldContextDefaultValue.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValue.to_json())

# convert the object into a dict
custom_field_context_default_value_dict = custom_field_context_default_value_instance.to_dict()
# create an instance of CustomFieldContextDefaultValue from a dict
custom_field_context_default_value_from_dict = CustomFieldContextDefaultValue.from_dict(custom_field_context_default_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


