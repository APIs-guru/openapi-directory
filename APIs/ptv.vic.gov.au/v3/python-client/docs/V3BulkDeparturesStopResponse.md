# V3BulkDeparturesStopResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_id** | **int** | Stop identifier | [optional] 
**stop_landmark** | **str** | Landmark in proximity of stop | [optional] 
**stop_latitude** | **float** | Geographic coordinate of latitude at stop | [optional] 
**stop_longitude** | **float** | Geographic coordinate of longitude at stop | [optional] 
**stop_name** | **str** | Name of stop | [optional] 
**stop_suburb** | **str** | suburb of stop | [optional] 

## Example

```python
from openapi_client.models.v3_bulk_departures_stop_response import V3BulkDeparturesStopResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3BulkDeparturesStopResponse from a JSON string
v3_bulk_departures_stop_response_instance = V3BulkDeparturesStopResponse.from_json(json)
# print the JSON string representation of the object
print(V3BulkDeparturesStopResponse.to_json())

# convert the object into a dict
v3_bulk_departures_stop_response_dict = v3_bulk_departures_stop_response_instance.to_dict()
# create an instance of V3BulkDeparturesStopResponse from a dict
v3_bulk_departures_stop_response_from_dict = V3BulkDeparturesStopResponse.from_dict(v3_bulk_departures_stop_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


