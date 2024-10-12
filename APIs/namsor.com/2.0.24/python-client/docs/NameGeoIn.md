# NameGeoIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.name_geo_in import NameGeoIn

# TODO update the JSON string below
json = "{}"
# create an instance of NameGeoIn from a JSON string
name_geo_in_instance = NameGeoIn.from_json(json)
# print the JSON string representation of the object
print(NameGeoIn.to_json())

# convert the object into a dict
name_geo_in_dict = name_geo_in_instance.to_dict()
# create an instance of NameGeoIn from a dict
name_geo_in_from_dict = NameGeoIn.from_dict(name_geo_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


