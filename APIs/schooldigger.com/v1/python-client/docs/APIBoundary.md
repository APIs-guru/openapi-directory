# APIBoundary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_boundary** | **bool** | States whether there is a boundary available | [optional] 
**polyline_collection** | [**List[APIPolyline]**](APIPolyline.md) | Collection of one or more polylines that can be used to create the boundary on a map. NOTE: this value is JSON encoded. Specifically, backslashes will be returned escaped (two backslashes). Make sure to decode the polyline before you use it | [optional] 

## Example

```python
from openapi_client.models.api_boundary import APIBoundary

# TODO update the JSON string below
json = "{}"
# create an instance of APIBoundary from a JSON string
api_boundary_instance = APIBoundary.from_json(json)
# print the JSON string representation of the object
print(APIBoundary.to_json())

# convert the object into a dict
api_boundary_dict = api_boundary_instance.to_dict()
# create an instance of APIBoundary from a dict
api_boundary_from_dict = APIBoundary.from_dict(api_boundary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


