# UrlPathMatchConditionParameters

Defines the parameters for UrlPath match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_values** | **List[str]** | The match value for the condition of the delivery rule | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 
**transforms** | [**List[Transform]**](Transform.md) | List of transforms | [optional] 

## Example

```python
from openapi_client.models.url_path_match_condition_parameters import UrlPathMatchConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UrlPathMatchConditionParameters from a JSON string
url_path_match_condition_parameters_instance = UrlPathMatchConditionParameters.from_json(json)
# print the JSON string representation of the object
print(UrlPathMatchConditionParameters.to_json())

# convert the object into a dict
url_path_match_condition_parameters_dict = url_path_match_condition_parameters_instance.to_dict()
# create an instance of UrlPathMatchConditionParameters from a dict
url_path_match_condition_parameters_from_dict = UrlPathMatchConditionParameters.from_dict(url_path_match_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


