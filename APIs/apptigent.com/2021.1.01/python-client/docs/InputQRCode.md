# InputQRCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | Text value(s) (vertical bar delimited by type) | 
**payload** | **str** | Payload type | [default to 'Plain Text (string)']

## Example

```python
from openapi_client.models.input_qr_code import InputQRCode

# TODO update the JSON string below
json = "{}"
# create an instance of InputQRCode from a JSON string
input_qr_code_instance = InputQRCode.from_json(json)
# print the JSON string representation of the object
print(InputQRCode.to_json())

# convert the object into a dict
input_qr_code_dict = input_qr_code_instance.to_dict()
# create an instance of InputQRCode from a dict
input_qr_code_from_dict = InputQRCode.from_dict(input_qr_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


