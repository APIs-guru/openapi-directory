# CustomAttribute

Custom attribute values that are either filterable or non-filterable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filterable** | **bool** | Optional. If the &#x60;filterable&#x60; flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false. | [optional] 
**long_values** | **List[str]** | Optional but exactly one of string_values or long_values must be specified. This field is used to perform number range search. (&#x60;EQ&#x60;, &#x60;GT&#x60;, &#x60;GE&#x60;, &#x60;LE&#x60;, &#x60;LT&#x60;) over filterable &#x60;long_value&#x60;. Currently at most 1 long_values is supported. | [optional] 
**string_values** | **List[str]** | Optional but exactly one of string_values or long_values must be specified. This field is used to perform a string match (&#x60;CASE_SENSITIVE_MATCH&#x60; or &#x60;CASE_INSENSITIVE_MATCH&#x60;) search. For filterable &#x60;string_value&#x60;s, a maximum total number of 200 values is allowed, with each &#x60;string_value&#x60; has a byte size of no more than 500B. For unfilterable &#x60;string_values&#x60;, the maximum total byte size of unfilterable &#x60;string_values&#x60; is 50KB. Empty string is not allowed. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute import CustomAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttribute from a JSON string
custom_attribute_instance = CustomAttribute.from_json(json)
# print the JSON string representation of the object
print(CustomAttribute.to_json())

# convert the object into a dict
custom_attribute_dict = custom_attribute_instance.to_dict()
# create an instance of CustomAttribute from a dict
custom_attribute_from_dict = CustomAttribute.from_dict(custom_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


