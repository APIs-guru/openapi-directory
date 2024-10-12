# APIPolyline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_encoded_points** | **int** | Number of encoded points in polyline | [optional] 
**polyline_overlay_encoded_points** | **str** | Polyline for use with Google Maps or other mapping software. NOTE: this value is JSON encoded. Specifically, backslashes will be returned escaped (two backslashes). Make sure to decode the polyline before you use it | [optional] 

## Example

```python
from openapi_client.models.api_polyline import APIPolyline

# TODO update the JSON string below
json = "{}"
# create an instance of APIPolyline from a JSON string
api_polyline_instance = APIPolyline.from_json(json)
# print the JSON string representation of the object
print(APIPolyline.to_json())

# convert the object into a dict
api_polyline_dict = api_polyline_instance.to_dict()
# create an instance of APIPolyline from a dict
api_polyline_from_dict = APIPolyline.from_dict(api_polyline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


