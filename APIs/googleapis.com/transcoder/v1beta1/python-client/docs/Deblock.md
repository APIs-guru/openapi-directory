# Deblock

Deblock preprocessing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable deblocker. The default is &#x60;false&#x60;. | [optional] 
**strength** | **float** | Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0. | [optional] 

## Example

```python
from openapi_client.models.deblock import Deblock

# TODO update the JSON string below
json = "{}"
# create an instance of Deblock from a JSON string
deblock_instance = Deblock.from_json(json)
# print the JSON string representation of the object
print(Deblock.to_json())

# convert the object into a dict
deblock_dict = deblock_instance.to_dict()
# create an instance of Deblock from a dict
deblock_from_dict = Deblock.from_dict(deblock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


