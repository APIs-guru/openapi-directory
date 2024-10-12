# RequestMethodMatchConditionParameters

Defines the parameters for RequestMethod match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_values** | **List[str]** | The match value for the condition of the delivery rule | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 

## Example

```python
from openapi_client.models.request_method_match_condition_parameters import RequestMethodMatchConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RequestMethodMatchConditionParameters from a JSON string
request_method_match_condition_parameters_instance = RequestMethodMatchConditionParameters.from_json(json)
# print the JSON string representation of the object
print(RequestMethodMatchConditionParameters.to_json())

# convert the object into a dict
request_method_match_condition_parameters_dict = request_method_match_condition_parameters_instance.to_dict()
# create an instance of RequestMethodMatchConditionParameters from a dict
request_method_match_condition_parameters_from_dict = RequestMethodMatchConditionParameters.from_dict(request_method_match_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


