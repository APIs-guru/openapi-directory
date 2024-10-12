# HttpVersionMatchConditionParameters

Defines the parameters for HttpVersion match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_values** | **List[str]** | The match value for the condition of the delivery rule | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 

## Example

```python
from openapi_client.models.http_version_match_condition_parameters import HttpVersionMatchConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HttpVersionMatchConditionParameters from a JSON string
http_version_match_condition_parameters_instance = HttpVersionMatchConditionParameters.from_json(json)
# print the JSON string representation of the object
print(HttpVersionMatchConditionParameters.to_json())

# convert the object into a dict
http_version_match_condition_parameters_dict = http_version_match_condition_parameters_instance.to_dict()
# create an instance of HttpVersionMatchConditionParameters from a dict
http_version_match_condition_parameters_from_dict = HttpVersionMatchConditionParameters.from_dict(http_version_match_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


