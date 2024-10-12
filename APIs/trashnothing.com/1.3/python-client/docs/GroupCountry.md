# GroupCountry

Provides information about the country that is associated with a group.  May be null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** | A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).  | [optional] 
**name** | **str** | The name of the country. | [optional] 

## Example

```python
from openapi_client.models.group_country import GroupCountry

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCountry from a JSON string
group_country_instance = GroupCountry.from_json(json)
# print the JSON string representation of the object
print(GroupCountry.to_json())

# convert the object into a dict
group_country_dict = group_country_instance.to_dict()
# create an instance of GroupCountry from a dict
group_country_from_dict = GroupCountry.from_dict(group_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


