# LocalizedMessage

Provides a localized error message that is safe to return to the user which can be attached to an RPC error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: \&quot;en-US\&quot;, \&quot;fr-CH\&quot;, \&quot;es-MX\&quot; | [optional] 
**message** | **str** | The localized error message in the above locale. | [optional] 

## Example

```python
from openapi_client.models.localized_message import LocalizedMessage

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedMessage from a JSON string
localized_message_instance = LocalizedMessage.from_json(json)
# print the JSON string representation of the object
print(LocalizedMessage.to_json())

# convert the object into a dict
localized_message_dict = localized_message_instance.to_dict()
# create an instance of LocalizedMessage from a dict
localized_message_from_dict = LocalizedMessage.from_dict(localized_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


