# OmidAssignedTargetingOptionDetails

Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**omid** | **str** | Required. The type of Open Measurement enabled inventory. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_OMID&#x60;. | [optional] 

## Example

```python
from openapi_client.models.omid_assigned_targeting_option_details import OmidAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OmidAssignedTargetingOptionDetails from a JSON string
omid_assigned_targeting_option_details_instance = OmidAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OmidAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
omid_assigned_targeting_option_details_dict = omid_assigned_targeting_option_details_instance.to_dict()
# create an instance of OmidAssignedTargetingOptionDetails from a dict
omid_assigned_targeting_option_details_from_dict = OmidAssignedTargetingOptionDetails.from_dict(omid_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


