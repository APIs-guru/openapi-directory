# OperatingSystemAssignedTargetingOptionDetails

Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the operating system. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting option ID populated in targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60;. | [optional] 

## Example

```python
from openapi_client.models.operating_system_assigned_targeting_option_details import OperatingSystemAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemAssignedTargetingOptionDetails from a JSON string
operating_system_assigned_targeting_option_details_instance = OperatingSystemAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
operating_system_assigned_targeting_option_details_dict = operating_system_assigned_targeting_option_details_instance.to_dict()
# create an instance of OperatingSystemAssignedTargetingOptionDetails from a dict
operating_system_assigned_targeting_option_details_from_dict = OperatingSystemAssignedTargetingOptionDetails.from_dict(operating_system_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


