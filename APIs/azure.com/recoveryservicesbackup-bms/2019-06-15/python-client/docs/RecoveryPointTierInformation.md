# RecoveryPointTierInformation

Recovery point tier information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Recovery point tier status. | [optional] 
**type** | **str** | Recovery point tier type. | [optional] 

## Example

```python
from openapi_client.models.recovery_point_tier_information import RecoveryPointTierInformation

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointTierInformation from a JSON string
recovery_point_tier_information_instance = RecoveryPointTierInformation.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointTierInformation.to_json())

# convert the object into a dict
recovery_point_tier_information_dict = recovery_point_tier_information_instance.to_dict()
# create an instance of RecoveryPointTierInformation from a dict
recovery_point_tier_information_from_dict = RecoveryPointTierInformation.from_dict(recovery_point_tier_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


