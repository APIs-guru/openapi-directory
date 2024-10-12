# Service


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**allowed_vehicles** | **List[str]** | Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this service can only be conducted EITHER by &#x60;technician_peter&#x60; OR &#x60;technician_stefan&#x60; specify this as follows: &#x60;[\&quot;technician_peter\&quot;,\&quot;technician_stefan\&quot;]&#x60;. | [optional] 
**disallowed_vehicles** | **List[str]** | Specifies an array of disallowed vehicles, i.e. array of vehicle ids. | [optional] 
**duration** | **int** | Specifies the duration of the service in seconds, i.e. how long it takes at the customer site. | [optional] [default to 0]
**group** | **str** | Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. | [optional] 
**id** | **str** | Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id. | 
**max_time_in_vehicle** | **int** | Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of \&quot;type\&quot;:\&quot;delivery\&quot;. | [optional] 
**name** | **str** | Meaningful name for service, e.g. &#x60;\&quot;deliver pizza\&quot;&#x60;. | [optional] 
**preparation_time** | **int** | Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once. | [optional] [default to 0]
**priority** | **int** | Specifies the priority. Can be 1 &#x3D; high priority to 10 &#x3D; low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution. | [optional] [default to 2]
**required_skills** | **List[str]** | Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this service needs to be conducted by a technician having a &#x60;drilling_machine&#x60; and a &#x60;screw_driver&#x60; then specify the array as follows: &#x60;[\&quot;drilling_machine\&quot;,\&quot;screw_driver\&quot;]&#x60;. This means that the service can only be done by a vehicle (technician) that has the skills &#x60;drilling_machine&#x60; AND &#x60;screw_driver&#x60; in its skill array. Otherwise it remains unassigned. | [optional] 
**size** | **List[int]** | Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5. | [optional] [default to [0]]
**time_windows** | [**List[TimeWindow]**](TimeWindow.md) | Specifies an array of time window objects (see time_window object below). Specify the time either with the recommended Unix time stamp (the number of seconds since 1970-01-01) or you can also count the seconds relative to Monday morning 00:00 and define the whole week in seconds. For example, Monday 9am is then represented by 9hour * 3600sec/hour &#x3D; 32400. In turn, Wednesday 1pm corresponds to 2day * 24hour/day * 3600sec/hour + 1day * 13hour/day * 3600sec/hour &#x3D; 219600. See this tutorial for more information. | [optional] 
**type** | **str** | Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions &gt; 0. If it is specified as &#x60;service&#x60; or &#x60;pickup&#x60;, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a &#x60;delivery&#x60;, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route). | [optional] [default to 'service']

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


