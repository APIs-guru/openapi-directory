# V3OutletGeolocationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outlets** | [**List[V3OutletGeolocation]**](V3OutletGeolocation.md) | myki ticket outlets | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_outlet_geolocation_response import V3OutletGeolocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3OutletGeolocationResponse from a JSON string
v3_outlet_geolocation_response_instance = V3OutletGeolocationResponse.from_json(json)
# print the JSON string representation of the object
print(V3OutletGeolocationResponse.to_json())

# convert the object into a dict
v3_outlet_geolocation_response_dict = v3_outlet_geolocation_response_instance.to_dict()
# create an instance of V3OutletGeolocationResponse from a dict
v3_outlet_geolocation_response_from_dict = V3OutletGeolocationResponse.from_dict(v3_outlet_geolocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


