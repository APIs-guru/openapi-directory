# APIBoundary12


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_boundary** | **bool** | States whether there is a boundary available | [optional] 
**polyline_collection** | [**List[APIPolyline]**](APIPolyline.md) | Collection of one or more polylines that can be used to create the boundary on a map. NOTE: this value is JSON encoded. Specifically, backslashes will be returned escaped (two backslashes). Make sure to decode the polyline before you use it | [optional] 
**polylines** | **str** | Collection of latitude/longitude vertices to form a polygon representing the boundary | [optional] 

## Example

```python
from openapi_client.models.api_boundary12 import APIBoundary12

# TODO update the JSON string below
json = "{}"
# create an instance of APIBoundary12 from a JSON string
api_boundary12_instance = APIBoundary12.from_json(json)
# print the JSON string representation of the object
print(APIBoundary12.to_json())

# convert the object into a dict
api_boundary12_dict = api_boundary12_instance.to_dict()
# create an instance of APIBoundary12 from a dict
api_boundary12_from_dict = APIBoundary12.from_dict(api_boundary12_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


