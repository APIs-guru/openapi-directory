# CounterOptions

Increment a streamz counter with the specified metric and field names. Metric names should start with a '/', generally be lowercase-only, and end in \"_count\". Field names should not contain an initial slash. The actual exported metric names will have \"/iam/policy\" prepended. Field names correspond to IAM request parameters and field values are their respective values. Supported field names: - \"authority\", which is \"[token]\" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - \"iam_principal\", a representation of IAMContext.principal even if a token or authority selector is present; or - \"\" (empty string), resulting in a counter with no fields. Examples: counter { metric: \"/debug_access_count\" field: \"iam_principal\" } ==> increment counter /iam/policy/debug_access_count {iam_principal=[value of IAMContext.principal]}

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | [**List[CustomField]**](CustomField.md) | Custom fields. | [optional] 
**var_field** | **str** | The field value to attribute. | [optional] 
**metric** | **str** | The metric to update. | [optional] 

## Example

```python
from openapi_client.models.counter_options import CounterOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CounterOptions from a JSON string
counter_options_instance = CounterOptions.from_json(json)
# print the JSON string representation of the object
print(CounterOptions.to_json())

# convert the object into a dict
counter_options_dict = counter_options_instance.to_dict()
# create an instance of CounterOptions from a dict
counter_options_from_dict = CounterOptions.from_dict(counter_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


