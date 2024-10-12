# GeocodingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**List[GeocodingLocation]**](GeocodingLocation.md) |  | [optional] 
**took** | **float** | in ms | [optional] 

## Example

```python
from openapi_client.models.geocoding_response import GeocodingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeocodingResponse from a JSON string
geocoding_response_instance = GeocodingResponse.from_json(json)
# print the JSON string representation of the object
print(GeocodingResponse.to_json())

# convert the object into a dict
geocoding_response_dict = geocoding_response_instance.to_dict()
# create an instance of GeocodingResponse from a dict
geocoding_response_from_dict = GeocodingResponse.from_dict(geocoding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


