# AdvertisedId

Defines a unique identifier of a beacon as broadcast by the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **bytearray** | The actual beacon identifier, as broadcast by the beacon hardware. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. The base64 encoding should be of the binary byte-stream and not any textual (such as hex) representation thereof. Required. | [optional] 
**type** | **str** | Specifies the identifier type. Required. | [optional] 

## Example

```python
from openapi_client.models.advertised_id import AdvertisedId

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertisedId from a JSON string
advertised_id_instance = AdvertisedId.from_json(json)
# print the JSON string representation of the object
print(AdvertisedId.to_json())

# convert the object into a dict
advertised_id_dict = advertised_id_instance.to_dict()
# create an instance of AdvertisedId from a dict
advertised_id_from_dict = AdvertisedId.from_dict(advertised_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


