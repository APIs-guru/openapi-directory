# DisplayMarkUpParametersValue

The parameters object will contain a key/value pair for each data binding present in the value. The key will match the name of the data binding without the enclosing curly brackets. For example, If \"{{Terms and Conditions}}\" is present in the value, a value with the key \"Terms and Conditions\" will be present in the parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the parameter | [optional] 
**type** | **str** | Type of parameter * &#x60;link&#x60; - The &#39;value&#39; contains a link to external content. The user should be able click on this link to view the content. * &#x60;mailto&#x60; - The &#39;value&#39; contains an email address. The user should be able click on this address to send open their email client. | [optional] 
**value** | **str** | Value of this parameter | [optional] 

## Example

```python
from openapi_client.models.display_mark_up_parameters_value import DisplayMarkUpParametersValue

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayMarkUpParametersValue from a JSON string
display_mark_up_parameters_value_instance = DisplayMarkUpParametersValue.from_json(json)
# print the JSON string representation of the object
print(DisplayMarkUpParametersValue.to_json())

# convert the object into a dict
display_mark_up_parameters_value_dict = display_mark_up_parameters_value_instance.to_dict()
# create an instance of DisplayMarkUpParametersValue from a dict
display_mark_up_parameters_value_from_dict = DisplayMarkUpParametersValue.from_dict(display_mark_up_parameters_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


