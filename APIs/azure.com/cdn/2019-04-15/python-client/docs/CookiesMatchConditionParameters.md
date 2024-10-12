# CookiesMatchConditionParameters

Defines the parameters for Cookies match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_values** | **List[str]** | The match value for the condition of the delivery rule | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 
**selector** | **str** | Name of Cookies to be matched | 
**transforms** | [**List[Transform]**](Transform.md) | List of transforms | [optional] 

## Example

```python
from openapi_client.models.cookies_match_condition_parameters import CookiesMatchConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CookiesMatchConditionParameters from a JSON string
cookies_match_condition_parameters_instance = CookiesMatchConditionParameters.from_json(json)
# print the JSON string representation of the object
print(CookiesMatchConditionParameters.to_json())

# convert the object into a dict
cookies_match_condition_parameters_dict = cookies_match_condition_parameters_instance.to_dict()
# create an instance of CookiesMatchConditionParameters from a dict
cookies_match_condition_parameters_from_dict = CookiesMatchConditionParameters.from_dict(cookies_match_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


