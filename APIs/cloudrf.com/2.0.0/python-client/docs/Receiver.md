# Receiver


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt** | **float** | Altitude above ground level in metres OR feet | [optional] [default to 0.1]
**lat** | **float** | Latitude in decimal degrees | [optional] [default to 0]
**lon** | **float** | Longitude in decimal degrees | [optional] [default to 0]
**rxg** | **float** | Receiver antenna gain in dBi | [optional] [default to 2.15]
**rxs** | **float** | Receiver sensitivity/threshold in measured units defined by &#39;out&#39; param | [optional] [default to -90]

## Example

```python
from openapi_client.models.receiver import Receiver

# TODO update the JSON string below
json = "{}"
# create an instance of Receiver from a JSON string
receiver_instance = Receiver.from_json(json)
# print the JSON string representation of the object
print(Receiver.to_json())

# convert the object into a dict
receiver_dict = receiver_instance.to_dict()
# create an instance of Receiver from a dict
receiver_from_dict = Receiver.from_dict(receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


