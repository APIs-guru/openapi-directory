# Barcode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **str** | base64 encoded PNG image | 
**ean** | **str** |  | 

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


