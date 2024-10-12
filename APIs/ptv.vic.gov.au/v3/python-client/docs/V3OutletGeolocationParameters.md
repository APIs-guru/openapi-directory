# V3OutletGeolocationParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_distance** | **float** | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default &#x3D; 300) | [optional] 
**max_results** | **int** | Maximum number of results returned (default &#x3D; 30) | [optional] 

## Example

```python
from openapi_client.models.v3_outlet_geolocation_parameters import V3OutletGeolocationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of V3OutletGeolocationParameters from a JSON string
v3_outlet_geolocation_parameters_instance = V3OutletGeolocationParameters.from_json(json)
# print the JSON string representation of the object
print(V3OutletGeolocationParameters.to_json())

# convert the object into a dict
v3_outlet_geolocation_parameters_dict = v3_outlet_geolocation_parameters_instance.to_dict()
# create an instance of V3OutletGeolocationParameters from a dict
v3_outlet_geolocation_parameters_from_dict = V3OutletGeolocationParameters.from_dict(v3_outlet_geolocation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


