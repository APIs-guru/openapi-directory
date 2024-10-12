# AttestedData

This is the response from the Attested_GetDocument operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | This is the encoding scheme of the signature. | [optional] 
**signature** | **str** | This is the encoded string containing the VM ID, SKU, plan information, public key, timestamp, and nonce value. | [optional] 

## Example

```python
from openapi_client.models.attested_data import AttestedData

# TODO update the JSON string below
json = "{}"
# create an instance of AttestedData from a JSON string
attested_data_instance = AttestedData.from_json(json)
# print the JSON string representation of the object
print(AttestedData.to_json())

# convert the object into a dict
attested_data_dict = attested_data_instance.to_dict()
# create an instance of AttestedData from a dict
attested_data_from_dict = AttestedData.from_dict(attested_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


