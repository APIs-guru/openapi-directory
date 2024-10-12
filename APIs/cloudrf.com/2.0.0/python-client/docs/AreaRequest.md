# AreaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antenna** | [**Antenna**](Antenna.md) |  | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**model** | [**Model**](Model.md) |  | [optional] 
**network** | **str** | Network name/group | [optional] [default to 'Testing']
**output** | [**Output**](Output.md) |  | [optional] 
**receiver** | [**Receiver**](Receiver.md) |  | [optional] 
**site** | **str** | Site name | [optional] [default to 'A1']
**transmitter** | [**Transmitter**](Transmitter.md) |  | [optional] 

## Example

```python
from openapi_client.models.area_request import AreaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AreaRequest from a JSON string
area_request_instance = AreaRequest.from_json(json)
# print the JSON string representation of the object
print(AreaRequest.to_json())

# convert the object into a dict
area_request_dict = area_request_instance.to_dict()
# create an instance of AreaRequest from a dict
area_request_from_dict = AreaRequest.from_dict(area_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


