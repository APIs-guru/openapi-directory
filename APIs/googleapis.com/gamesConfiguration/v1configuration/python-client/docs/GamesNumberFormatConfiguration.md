# GamesNumberFormatConfiguration

A number format resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | The curreny code string. Only used for CURRENCY format type. | [optional] 
**num_decimal_places** | **int** | The number of decimal places for number. Only used for NUMERIC format type. | [optional] 
**number_format_type** | **str** | The formatting for the number. | [optional] 
**suffix** | [**GamesNumberAffixConfiguration**](GamesNumberAffixConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.games_number_format_configuration import GamesNumberFormatConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of GamesNumberFormatConfiguration from a JSON string
games_number_format_configuration_instance = GamesNumberFormatConfiguration.from_json(json)
# print the JSON string representation of the object
print(GamesNumberFormatConfiguration.to_json())

# convert the object into a dict
games_number_format_configuration_dict = games_number_format_configuration_instance.to_dict()
# create an instance of GamesNumberFormatConfiguration from a dict
games_number_format_configuration_from_dict = GamesNumberFormatConfiguration.from_dict(games_number_format_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


