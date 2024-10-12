# ApiLevelCondition

A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_api_level** | **int** | The minimum desired Android Framework API level. If the device doesn&#39;t meet the minimum requirement, this condition is satisfied. Must be greater than zero. | [optional] 

## Example

```python
from openapi_client.models.api_level_condition import ApiLevelCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLevelCondition from a JSON string
api_level_condition_instance = ApiLevelCondition.from_json(json)
# print the JSON string representation of the object
print(ApiLevelCondition.to_json())

# convert the object into a dict
api_level_condition_dict = api_level_condition_instance.to_dict()
# create an instance of ApiLevelCondition from a dict
api_level_condition_from_dict = ApiLevelCondition.from_dict(api_level_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


