# EcKeyType

Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature_algorithm** | **str** | Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. | [optional] 

## Example

```python
from openapi_client.models.ec_key_type import EcKeyType

# TODO update the JSON string below
json = "{}"
# create an instance of EcKeyType from a JSON string
ec_key_type_instance = EcKeyType.from_json(json)
# print the JSON string representation of the object
print(EcKeyType.to_json())

# convert the object into a dict
ec_key_type_dict = ec_key_type_instance.to_dict()
# create an instance of EcKeyType from a dict
ec_key_type_from_dict = EcKeyType.from_dict(ec_key_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


