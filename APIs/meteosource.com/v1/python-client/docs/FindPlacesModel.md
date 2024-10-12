# FindPlacesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adm_area1** | **str** | first-level administrative area (a US state, for example) | [optional] [default to 'England']
**adm_area2** | **str** | second-level administrative area (a US county, for example) | [optional] [default to 'Greater London']
**country** | **str** | name of the country | [optional] [default to 'United Kingdom']
**lat** | **str** | Latitude of the point, always in the format \\&lt;float&gt;&lt;N/S&gt;, for example &#x60;&#x60;23.5S&#x60;&#x60; | [optional] [default to '23.2N']
**lon** | **str** | Longitude of the point, always in format \\&lt;float&gt;&lt;E/W&gt;, for example &#x60;&#x60;23.5W&#x60;&#x60; | [optional] [default to '15.3E']
**name** | **str** | name of the place | [optional] [default to 'London']
**place_id** | **str** | unique identifier of the place, which can be used in /point and /map endpoints | [optional] [default to 'london']
**timezone** | **str** | Timezone of the point in tzinfo format. | [optional] [default to 'Europe/London']
**type** | **str** | The character of the place. May be one of the following values:  * administrative areas (states, counties, districts...): &#x60;&#x60;administrative_area&#x60;&#x60; * country: &#x60;&#x60;country&#x60;&#x60; * a different political entity from a country (for example, a dependent teritory): &#x60;&#x60;political_entity&#x60;&#x60; * villages, towns and cities: &#x60;&#x60;settlement&#x60;&#x60; * air industry locations: &#x60;&#x60;airbase&#x60;&#x60;, &#x60;&#x60;airfield&#x60;&#x60;, &#x60;&#x60;heliport&#x60;&#x60;, &#x60;&#x60;airport&#x60;&#x60;, &#x60;&#x60;airport_terminal&#x60;&#x60; * places related to water: &#x60;&#x60;bay&#x60;&#x60;, &#x60;&#x60;channel&#x60;&#x60;, &#x60;&#x60;fjord&#x60;&#x60;, &#x60;&#x60;lake&#x60;&#x60;, &#x60;&#x60;pond&#x60;&#x60;, &#x60;&#x60;falls&#x60;&#x60;, &#x60;&#x60;gulf&#x60;&#x60;,     &#x60;&#x60;harbor&#x60;&#x60;, &#x60;&#x60;reservoir&#x60;&#x60;, &#x60;&#x60;sea&#x60;&#x60;, &#x60;&#x60;dam&#x60;&#x60;, &#x60;&#x60;cape&#x60;&#x60;, &#x60;&#x60;island&#x60;&#x60;, &#x60;&#x60;peninsula&#x60;&#x60; * places related to mountain areas: &#x60;&#x60;hill&#x60;&#x60;, &#x60;&#x60;mountain&#x60;&#x60;, &#x60;&#x60;peak&#x60;&#x60;, &#x60;&#x60;valley&#x60;&#x60;, &#x60;&#x60;volcano&#x60;&#x60;, &#x60;&#x60;canyon&#x60;&#x60; * other places related to nature: &#x60;&#x60;park&#x60;&#x60;, &#x60;&#x60;reserve&#x60;&#x60;, &#x60;&#x60;resort&#x60;&#x60;, &#x60;&#x60;desert&#x60;&#x60; * places based on postcodes: &#x60;&#x60;postcode&#x60;&#x60;          | [optional] [default to 'settlement']

## Example

```python
from openapi_client.models.find_places_model import FindPlacesModel

# TODO update the JSON string below
json = "{}"
# create an instance of FindPlacesModel from a JSON string
find_places_model_instance = FindPlacesModel.from_json(json)
# print the JSON string representation of the object
print(FindPlacesModel.to_json())

# convert the object into a dict
find_places_model_dict = find_places_model_instance.to_dict()
# create an instance of FindPlacesModel from a dict
find_places_model_from_dict = FindPlacesModel.from_dict(find_places_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


