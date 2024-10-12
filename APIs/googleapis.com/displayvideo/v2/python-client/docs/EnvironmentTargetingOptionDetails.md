# EnvironmentTargetingOptionDetails

Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | Output only. The serving environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.environment_targeting_option_details import EnvironmentTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentTargetingOptionDetails from a JSON string
environment_targeting_option_details_instance = EnvironmentTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(EnvironmentTargetingOptionDetails.to_json())

# convert the object into a dict
environment_targeting_option_details_dict = environment_targeting_option_details_instance.to_dict()
# create an instance of EnvironmentTargetingOptionDetails from a dict
environment_targeting_option_details_from_dict = EnvironmentTargetingOptionDetails.from_dict(environment_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


