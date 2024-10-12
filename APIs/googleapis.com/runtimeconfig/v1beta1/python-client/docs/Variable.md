# Variable

Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the variable resource, in the format: projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME] The &#x60;[PROJECT_ID]&#x60; must be a valid project ID, &#x60;[CONFIG_NAME]&#x60; must be a valid RuntimeConfig resource and &#x60;[VARIABLE_NAME]&#x60; follows Unix file system file path naming. The &#x60;[VARIABLE_NAME]&#x60; can contain ASCII letters, numbers, slashes and dashes. Slashes are used as path element separators and are not part of the &#x60;[VARIABLE_NAME]&#x60; itself, so &#x60;[VARIABLE_NAME]&#x60; must contain at least one non-slash character. Multiple slashes are coalesced into single slash character. Each path segment should match [0-9A-Za-z](?:[_.A-Za-z0-9-]{0,62}[_.A-Za-z0-9])? regular expression. The length of a &#x60;[VARIABLE_NAME]&#x60; must be less than 256 characters. Once you create a variable, you cannot change the variable name. | [optional] 
**state** | **str** | Output only. The current state of the variable. The variable state indicates the outcome of the &#x60;variables().watch&#x60; call and is visible through the &#x60;get&#x60; and &#x60;list&#x60; calls. | [optional] 
**text** | **str** | The string value of the variable. The length of the value must be less than 4096 bytes. Empty values are also accepted. For example, &#x60;text: \&quot;my text value\&quot;&#x60;. The string must be valid UTF-8. | [optional] 
**update_time** | **str** | Output only. The time of the last variable update. Timestamp will be UTC timestamp. | [optional] 
**value** | **bytearray** | The binary value of the variable. The length of the value must be less than 4096 bytes. Empty values are also accepted. The value must be base64 encoded, and must comply with IETF RFC4648 (https://www.ietf.org/rfc/rfc4648.txt). Only one of &#x60;value&#x60; or &#x60;text&#x60; can be set. | [optional] 

## Example

```python
from openapi_client.models.variable import Variable

# TODO update the JSON string below
json = "{}"
# create an instance of Variable from a JSON string
variable_instance = Variable.from_json(json)
# print the JSON string representation of the object
print(Variable.to_json())

# convert the object into a dict
variable_dict = variable_instance.to_dict()
# create an instance of Variable from a dict
variable_from_dict = Variable.from_dict(variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


