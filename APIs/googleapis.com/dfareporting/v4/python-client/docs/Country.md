# Country

Contains information about a country that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code. | [optional] 
**dart_id** | **str** | DART ID of this country. This is the ID used for targeting and generating reports. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#country\&quot;. | [optional] 
**name** | **str** | Name of this country. | [optional] 
**ssl_enabled** | **bool** | Whether ad serving supports secure servers in this country. | [optional] 

## Example

```python
from openapi_client.models.country import Country

# TODO update the JSON string below
json = "{}"
# create an instance of Country from a JSON string
country_instance = Country.from_json(json)
# print the JSON string representation of the object
print(Country.to_json())

# convert the object into a dict
country_dict = country_instance.to_dict()
# create an instance of Country from a dict
country_from_dict = Country.from_dict(country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


