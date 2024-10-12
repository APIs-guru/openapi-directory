# X12MessageIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | The message id. | [optional] 

## Example

```python
from openapi_client.models.x12_message_identifier import X12MessageIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of X12MessageIdentifier from a JSON string
x12_message_identifier_instance = X12MessageIdentifier.from_json(json)
# print the JSON string representation of the object
print(X12MessageIdentifier.to_json())

# convert the object into a dict
x12_message_identifier_dict = x12_message_identifier_instance.to_dict()
# create an instance of X12MessageIdentifier from a dict
x12_message_identifier_from_dict = X12MessageIdentifier.from_dict(x12_message_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


