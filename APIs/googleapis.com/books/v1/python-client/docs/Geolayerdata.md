# Geolayerdata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**GeolayerdataCommon**](GeolayerdataCommon.md) |  | [optional] 
**geo** | [**GeolayerdataGeo**](GeolayerdataGeo.md) |  | [optional] 
**kind** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.geolayerdata import Geolayerdata

# TODO update the JSON string below
json = "{}"
# create an instance of Geolayerdata from a JSON string
geolayerdata_instance = Geolayerdata.from_json(json)
# print the JSON string representation of the object
print(Geolayerdata.to_json())

# convert the object into a dict
geolayerdata_dict = geolayerdata_instance.to_dict()
# create an instance of Geolayerdata from a dict
geolayerdata_from_dict = Geolayerdata.from_dict(geolayerdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


