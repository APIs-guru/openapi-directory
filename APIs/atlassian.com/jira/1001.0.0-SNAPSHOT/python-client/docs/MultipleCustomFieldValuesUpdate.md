# MultipleCustomFieldValuesUpdate

A custom field and its new value with a list of issue to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | **str** | The ID or key of the custom field. For example, &#x60;customfield_10010&#x60;. | 
**issue_ids** | **List[int]** | The list of issue IDs. | 
**value** | **object** | The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:   *  &#x60;string&#x60; the value must be a string.  *  &#x60;number&#x60; the value must be a number.  *  &#x60;datetime&#x60; the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, &#x60;\&quot;2023-01-18T12:00:00-03:00\&quot;&#x60; or &#x60;\&quot;2023-01-18T12:00:00.000Z\&quot;&#x60;. However, the milliseconds part is ignored.  *  &#x60;user&#x60; the value must be an object that contains the &#x60;accountId&#x60; field.  *  &#x60;group&#x60; the value must be an object that contains the group &#x60;name&#x60; or &#x60;groupId&#x60; field. Because group names can change, we recommend using &#x60;groupId&#x60;.  A list of appropriate values must be provided if the field is of the &#x60;list&#x60; [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types). | 

## Example

```python
from openapi_client.models.multiple_custom_field_values_update import MultipleCustomFieldValuesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleCustomFieldValuesUpdate from a JSON string
multiple_custom_field_values_update_instance = MultipleCustomFieldValuesUpdate.from_json(json)
# print the JSON string representation of the object
print(MultipleCustomFieldValuesUpdate.to_json())

# convert the object into a dict
multiple_custom_field_values_update_dict = multiple_custom_field_values_update_instance.to_dict()
# create an instance of MultipleCustomFieldValuesUpdate from a dict
multiple_custom_field_values_update_from_dict = MultipleCustomFieldValuesUpdate.from_dict(multiple_custom_field_values_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


