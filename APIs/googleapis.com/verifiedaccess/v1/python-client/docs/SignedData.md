# SignedData

The wrapper message of any data and its signature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | The data to be signed. | [optional] 
**signature** | **bytearray** | The signature of the data field. | [optional] 

## Example

```python
from openapi_client.models.signed_data import SignedData

# TODO update the JSON string below
json = "{}"
# create an instance of SignedData from a JSON string
signed_data_instance = SignedData.from_json(json)
# print the JSON string representation of the object
print(SignedData.to_json())

# convert the object into a dict
signed_data_dict = signed_data_instance.to_dict()
# create an instance of SignedData from a dict
signed_data_from_dict = SignedData.from_dict(signed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


