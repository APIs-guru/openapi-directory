# Antenna


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ant** | **int** | Antenna pattern code. 1&#x3D;Vertical dipole (Omni-directional) | [optional] [default to 1]
**azi** | **int** | Antenna azimuth in degrees north | [optional] [default to 0]
**hbw** | **int** | Custom antenna horizontal beamwidth in degrees. For use only with ant&#x3D;0 | [optional] [default to 0]
**pol** | **str** | Antenna polarization as either h or v | [optional] [default to 'v']
**tlt** | **float** | Antenna tilt in degrees below the horizon (inverted) | [optional] [default to 0]
**txg** | **float** | Transmitter antenna gain in dBi | [optional] [default to 2.15]
**txl** | **float** | Feeder loss in dB | [optional] [default to 0]
**vbw** | **int** | Custom antenna vertical beamwidth in degrees. For use only with ant&#x3D;0 | [optional] [default to 0]

## Example

```python
from openapi_client.models.antenna import Antenna

# TODO update the JSON string below
json = "{}"
# create an instance of Antenna from a JSON string
antenna_instance = Antenna.from_json(json)
# print the JSON string representation of the object
print(Antenna.to_json())

# convert the object into a dict
antenna_dict = antenna_instance.to_dict()
# create an instance of Antenna from a dict
antenna_from_dict = Antenna.from_dict(antenna_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


