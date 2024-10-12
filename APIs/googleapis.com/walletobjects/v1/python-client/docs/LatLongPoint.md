# LatLongPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#latLongPoint\&quot;&#x60;. | [optional] 
**latitude** | **float** | The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. | [optional] 
**longitude** | **float** | The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. | [optional] 

## Example

```python
from openapi_client.models.lat_long_point import LatLongPoint

# TODO update the JSON string below
json = "{}"
# create an instance of LatLongPoint from a JSON string
lat_long_point_instance = LatLongPoint.from_json(json)
# print the JSON string representation of the object
print(LatLongPoint.to_json())

# convert the object into a dict
lat_long_point_dict = lat_long_point_instance.to_dict()
# create an instance of LatLongPoint from a dict
lat_long_point_from_dict = LatLongPoint.from_dict(lat_long_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


