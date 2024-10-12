# Transmitter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt** | **float** | Altitude above ground level in metres OR feet | [optional] [default to 1]
**bwi** | **float** | Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz &#x3D; -104dBm, 20MHz &#x3D; -101dBm | [optional] [default to 0.1]
**frq** | **float** | Centre frequency in megahertz | [optional] [default to 868]
**lat** | **float** | Latitude in decimal degrees | [optional] [default to 38.916]
**lon** | **float** | Longitude in decimal degrees | [optional] [default to 1.448]
**txw** | **float** | Transmitter power in watts before the antenna | [optional] [default to 0.1]

## Example

```python
from openapi_client.models.transmitter import Transmitter

# TODO update the JSON string below
json = "{}"
# create an instance of Transmitter from a JSON string
transmitter_instance = Transmitter.from_json(json)
# print the JSON string representation of the object
print(Transmitter.to_json())

# convert the object into a dict
transmitter_dict = transmitter_instance.to_dict()
# create an instance of Transmitter from a dict
transmitter_from_dict = Transmitter.from_dict(transmitter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


