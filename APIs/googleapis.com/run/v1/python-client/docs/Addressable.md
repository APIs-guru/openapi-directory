# Addressable

Information for connecting over HTTP(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.addressable import Addressable

# TODO update the JSON string below
json = "{}"
# create an instance of Addressable from a JSON string
addressable_instance = Addressable.from_json(json)
# print the JSON string representation of the object
print(Addressable.to_json())

# convert the object into a dict
addressable_dict = addressable_instance.to_dict()
# create an instance of Addressable from a dict
addressable_from_dict = Addressable.from_dict(addressable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


