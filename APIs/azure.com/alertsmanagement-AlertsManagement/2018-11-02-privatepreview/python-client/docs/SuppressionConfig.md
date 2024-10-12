# SuppressionConfig

Suppression logic for a given action rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence_type** | **str** | Specifies when the suppression should be applied | 
**schedule** | [**SuppressionSchedule**](SuppressionSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.suppression_config import SuppressionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionConfig from a JSON string
suppression_config_instance = SuppressionConfig.from_json(json)
# print the JSON string representation of the object
print(SuppressionConfig.to_json())

# convert the object into a dict
suppression_config_dict = suppression_config_instance.to_dict()
# create an instance of SuppressionConfig from a dict
suppression_config_from_dict = SuppressionConfig.from_dict(suppression_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


