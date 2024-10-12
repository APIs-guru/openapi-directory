# OperatingSystemTargetingOptionDetails

Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the operating system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operating_system_targeting_option_details import OperatingSystemTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemTargetingOptionDetails from a JSON string
operating_system_targeting_option_details_instance = OperatingSystemTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemTargetingOptionDetails.to_json())

# convert the object into a dict
operating_system_targeting_option_details_dict = operating_system_targeting_option_details_instance.to_dict()
# create an instance of OperatingSystemTargetingOptionDetails from a dict
operating_system_targeting_option_details_from_dict = OperatingSystemTargetingOptionDetails.from_dict(operating_system_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


