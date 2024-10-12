# GamesNumberAffixConfiguration

A number affix resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**few** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**many** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**one** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**other** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**two** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**zero** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 

## Example

```python
from openapi_client.models.games_number_affix_configuration import GamesNumberAffixConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of GamesNumberAffixConfiguration from a JSON string
games_number_affix_configuration_instance = GamesNumberAffixConfiguration.from_json(json)
# print the JSON string representation of the object
print(GamesNumberAffixConfiguration.to_json())

# convert the object into a dict
games_number_affix_configuration_dict = games_number_affix_configuration_instance.to_dict()
# create an instance of GamesNumberAffixConfiguration from a dict
games_number_affix_configuration_from_dict = GamesNumberAffixConfiguration.from_dict(games_number_affix_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


