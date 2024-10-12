# LocalizedString

A message representing a user-facing string whose value may need to be translated before being displayed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, str]** | A map of arguments used when creating the localized message. Keys represent parameter names which may be used by the localized version when substituting dynamic values. | [optional] 
**message** | **str** | The canonical English version of this message. If no token is provided or the front-end has no message associated with the token, this text will be displayed as-is. | [optional] 
**token** | **str** | The token identifying the message, e.g. &#39;METRIC_READ_CPU&#39;. This should be unique within the service. | [optional] 

## Example

```python
from openapi_client.models.localized_string import LocalizedString

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedString from a JSON string
localized_string_instance = LocalizedString.from_json(json)
# print the JSON string representation of the object
print(LocalizedString.to_json())

# convert the object into a dict
localized_string_dict = localized_string_instance.to_dict()
# create an instance of LocalizedString from a dict
localized_string_from_dict = LocalizedString.from_dict(localized_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


