# EnvironmentAssignedTargetingOptionDetails

Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | Required. The serving environment. | [optional] 

## Example

```python
from openapi_client.models.environment_assigned_targeting_option_details import EnvironmentAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentAssignedTargetingOptionDetails from a JSON string
environment_assigned_targeting_option_details_instance = EnvironmentAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(EnvironmentAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
environment_assigned_targeting_option_details_dict = environment_assigned_targeting_option_details_instance.to_dict()
# create an instance of EnvironmentAssignedTargetingOptionDetails from a dict
environment_assigned_targeting_option_details_from_dict = EnvironmentAssignedTargetingOptionDetails.from_dict(environment_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


