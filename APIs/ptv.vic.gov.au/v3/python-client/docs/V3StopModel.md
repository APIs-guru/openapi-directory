# V3StopModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_type** | **int** | Transport mode identifier | [optional] 
**stop_distance** | **float** | Distance of stop from input location (in metres); returns 0 if no location is input | [optional] 
**stop_id** | **int** | Stop identifier | [optional] 
**stop_landmark** | **str** | Landmark in proximity of stop | [optional] 
**stop_latitude** | **float** | Geographic coordinate of latitude at stop | [optional] 
**stop_longitude** | **float** | Geographic coordinate of longitude at stop | [optional] 
**stop_name** | **str** | Name of stop | [optional] 
**stop_sequence** | **int** | Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. | [optional] 
**stop_suburb** | **str** | suburb of stop | [optional] 

## Example

```python
from openapi_client.models.v3_stop_model import V3StopModel

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopModel from a JSON string
v3_stop_model_instance = V3StopModel.from_json(json)
# print the JSON string representation of the object
print(V3StopModel.to_json())

# convert the object into a dict
v3_stop_model_dict = v3_stop_model_instance.to_dict()
# create an instance of V3StopModel from a dict
v3_stop_model_from_dict = V3StopModel.from_dict(v3_stop_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


