# Geo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bbox** | **List[float]** |  | 
**geometry** | [**Point**](Point.md) |  | [optional] 
**properties** | **object** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.geo import Geo

# TODO update the JSON string below
json = "{}"
# create an instance of Geo from a JSON string
geo_instance = Geo.from_json(json)
# print the JSON string representation of the object
print(Geo.to_json())

# convert the object into a dict
geo_dict = geo_instance.to_dict()
# create an instance of Geo from a dict
geo_from_dict = Geo.from_dict(geo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


