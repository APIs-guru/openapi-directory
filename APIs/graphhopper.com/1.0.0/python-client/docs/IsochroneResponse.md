# IsochroneResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyrights** | **List[str]** |  | [optional] 
**polygons** | [**List[IsochroneResponsePolygon]**](IsochroneResponsePolygon.md) | The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:  &#x60;&#x60;&#x60; L.geoJson(json.polygons).addTo(map) &#x60;&#x60;&#x60;  The number of polygon is identical to the specified buckets in the query. Every polygon contains the bucket number in the properties section of the GeoJson.  | [optional] 

## Example

```python
from openapi_client.models.isochrone_response import IsochroneResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IsochroneResponse from a JSON string
isochrone_response_instance = IsochroneResponse.from_json(json)
# print the JSON string representation of the object
print(IsochroneResponse.to_json())

# convert the object into a dict
isochrone_response_dict = isochrone_response_instance.to_dict()
# create an instance of IsochroneResponse from a dict
isochrone_response_from_dict = IsochroneResponse.from_dict(isochrone_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


