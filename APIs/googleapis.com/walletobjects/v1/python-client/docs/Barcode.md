# Barcode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_text** | **str** | An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#barcode\&quot;&#x60;. | [optional] 
**render_encoding** | **str** | The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. | [optional] 
**show_code_text** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**type** | **str** | The type of barcode. | [optional] 
**value** | **str** | The value encoded in the barcode. | [optional] 

## Example

```python
from openapi_client.models.barcode import Barcode

# TODO update the JSON string below
json = "{}"
# create an instance of Barcode from a JSON string
barcode_instance = Barcode.from_json(json)
# print the JSON string representation of the object
print(Barcode.to_json())

# convert the object into a dict
barcode_dict = barcode_instance.to_dict()
# create an instance of Barcode from a dict
barcode_from_dict = Barcode.from_dict(barcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


