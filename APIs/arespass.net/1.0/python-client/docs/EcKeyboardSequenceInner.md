# EcKeyboardSequenceInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**char** | **str** | The n-th character. | [optional] 
**l33tchar** | **str** | The n-th character after the l33t transformation. | [optional] 
**penalty** | **float** | The penalty applied to this character if it is part of a keyboard sequence.  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 

## Example

```python
from openapi_client.models.ec_keyboard_sequence_inner import EcKeyboardSequenceInner

# TODO update the JSON string below
json = "{}"
# create an instance of EcKeyboardSequenceInner from a JSON string
ec_keyboard_sequence_inner_instance = EcKeyboardSequenceInner.from_json(json)
# print the JSON string representation of the object
print(EcKeyboardSequenceInner.to_json())

# convert the object into a dict
ec_keyboard_sequence_inner_dict = ec_keyboard_sequence_inner_instance.to_dict()
# create an instance of EcKeyboardSequenceInner from a dict
ec_keyboard_sequence_inner_from_dict = EcKeyboardSequenceInner.from_dict(ec_keyboard_sequence_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


