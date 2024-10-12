# EdifactMessageIdentifier

The Edifact message identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | The message id on which this envelope settings has to be applied. | 

## Example

```python
from openapi_client.models.edifact_message_identifier import EdifactMessageIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactMessageIdentifier from a JSON string
edifact_message_identifier_instance = EdifactMessageIdentifier.from_json(json)
# print the JSON string representation of the object
print(EdifactMessageIdentifier.to_json())

# convert the object into a dict
edifact_message_identifier_dict = edifact_message_identifier_instance.to_dict()
# create an instance of EdifactMessageIdentifier from a dict
edifact_message_identifier_from_dict = EdifactMessageIdentifier.from_dict(edifact_message_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


