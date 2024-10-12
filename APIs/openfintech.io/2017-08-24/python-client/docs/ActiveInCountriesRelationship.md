# ActiveInCountriesRelationship

Active in countries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ActiveInCountriesRelationshipDataInner]**](ActiveInCountriesRelationshipDataInner.md) |  | [optional] 
**links** | [**ActiveInCountriesRelationshipLinks**](ActiveInCountriesRelationshipLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.active_in_countries_relationship import ActiveInCountriesRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveInCountriesRelationship from a JSON string
active_in_countries_relationship_instance = ActiveInCountriesRelationship.from_json(json)
# print the JSON string representation of the object
print(ActiveInCountriesRelationship.to_json())

# convert the object into a dict
active_in_countries_relationship_dict = active_in_countries_relationship_instance.to_dict()
# create an instance of ActiveInCountriesRelationship from a dict
active_in_countries_relationship_from_dict = ActiveInCountriesRelationship.from_dict(active_in_countries_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


