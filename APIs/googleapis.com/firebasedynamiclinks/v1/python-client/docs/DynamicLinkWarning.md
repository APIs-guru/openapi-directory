# DynamicLinkWarning

Dynamic Links warning messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warning_code** | **str** | The warning code. | [optional] 
**warning_document_link** | **str** | The document describing the warning, and helps resolve. | [optional] 
**warning_message** | **str** | The warning message to help developers improve their requests. | [optional] 

## Example

```python
from openapi_client.models.dynamic_link_warning import DynamicLinkWarning

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicLinkWarning from a JSON string
dynamic_link_warning_instance = DynamicLinkWarning.from_json(json)
# print the JSON string representation of the object
print(DynamicLinkWarning.to_json())

# convert the object into a dict
dynamic_link_warning_dict = dynamic_link_warning_instance.to_dict()
# create an instance of DynamicLinkWarning from a dict
dynamic_link_warning_from_dict = DynamicLinkWarning.from_dict(dynamic_link_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


