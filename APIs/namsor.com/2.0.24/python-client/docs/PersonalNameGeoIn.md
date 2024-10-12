# PersonalNameGeoIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_geo_in import PersonalNameGeoIn

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameGeoIn from a JSON string
personal_name_geo_in_instance = PersonalNameGeoIn.from_json(json)
# print the JSON string representation of the object
print(PersonalNameGeoIn.to_json())

# convert the object into a dict
personal_name_geo_in_dict = personal_name_geo_in_instance.to_dict()
# create an instance of PersonalNameGeoIn from a dict
personal_name_geo_in_from_dict = PersonalNameGeoIn.from_dict(personal_name_geo_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


