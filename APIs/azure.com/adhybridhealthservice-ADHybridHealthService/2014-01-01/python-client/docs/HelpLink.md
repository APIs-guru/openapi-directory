# HelpLink

The help link which contains more information related to an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | The title for the link. | [optional] 
**url** | **str** | The url for the help document. | [optional] 

## Example

```python
from openapi_client.models.help_link import HelpLink

# TODO update the JSON string below
json = "{}"
# create an instance of HelpLink from a JSON string
help_link_instance = HelpLink.from_json(json)
# print the JSON string representation of the object
print(HelpLink.to_json())

# convert the object into a dict
help_link_dict = help_link_instance.to_dict()
# create an instance of HelpLink from a dict
help_link_from_dict = HelpLink.from_dict(help_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


