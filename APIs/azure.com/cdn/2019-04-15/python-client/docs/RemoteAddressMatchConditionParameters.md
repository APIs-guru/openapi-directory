# RemoteAddressMatchConditionParameters

Defines the parameters for RemoteAddress match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_values** | **List[str]** | Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match. | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 
**transforms** | [**List[Transform]**](Transform.md) | List of transforms | [optional] 

## Example

```python
from openapi_client.models.remote_address_match_condition_parameters import RemoteAddressMatchConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteAddressMatchConditionParameters from a JSON string
remote_address_match_condition_parameters_instance = RemoteAddressMatchConditionParameters.from_json(json)
# print the JSON string representation of the object
print(RemoteAddressMatchConditionParameters.to_json())

# convert the object into a dict
remote_address_match_condition_parameters_dict = remote_address_match_condition_parameters_instance.to_dict()
# create an instance of RemoteAddressMatchConditionParameters from a dict
remote_address_match_condition_parameters_from_dict = RemoteAddressMatchConditionParameters.from_dict(remote_address_match_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


