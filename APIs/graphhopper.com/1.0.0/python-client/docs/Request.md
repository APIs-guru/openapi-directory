# Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | [**Algorithm**](Algorithm.md) |  | [optional] 
**configuration** | [**Configuration**](Configuration.md) |  | [optional] 
**cost_matrices** | [**List[CostMatrix]**](CostMatrix.md) | Specifies your own tranport time and distance matrices. | [optional] 
**objectives** | [**List[Objective]**](Objective.md) | Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized. | [optional] 
**relations** | [**List[RequestRelationsInner]**](RequestRelationsInner.md) | Defines additional relationships between orders. | [optional] 
**services** | [**List[Service]**](Service.md) | Specifies the orders of the type \&quot;service\&quot;. These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location. | [optional] 
**shipments** | [**List[Shipment]**](Shipment.md) | Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other. | [optional] 
**vehicle_types** | [**List[VehicleType]**](VehicleType.md) | Specifies the available vehicle types. These types can be assigned to vehicles. | [optional] 
**vehicles** | [**List[Vehicle]**](Vehicle.md) | Specifies the available vehicles. | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


