# PointsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antenna** | [**Antenna**](Antenna.md) |  | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**model** | [**Model**](Model.md) |  | [optional] 
**network** | **str** | Network name/group | [optional] [default to 'Testing']
**output** | [**Output**](Output.md) |  | [optional] 
**points** | [**List[Point]**](Point.md) |  | [optional] 
**receiver** | [**Receiver**](Receiver.md) |  | [optional] 
**site** | **str** | Site name | [optional] [default to 'Points']
**transmitter** | [**Transmitter**](Transmitter.md) |  | [optional] 

## Example

```python
from openapi_client.models.points_request import PointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PointsRequest from a JSON string
points_request_instance = PointsRequest.from_json(json)
# print the JSON string representation of the object
print(PointsRequest.to_json())

# convert the object into a dict
points_request_dict = points_request_instance.to_dict()
# create an instance of PointsRequest from a dict
points_request_from_dict = PointsRequest.from_dict(points_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


