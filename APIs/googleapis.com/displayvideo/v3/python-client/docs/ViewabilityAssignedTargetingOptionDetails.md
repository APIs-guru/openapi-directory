# ViewabilityAssignedTargetingOptionDetails

Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewability** | **str** | Required. The predicted viewability percentage. | [optional] 

## Example

```python
from openapi_client.models.viewability_assigned_targeting_option_details import ViewabilityAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ViewabilityAssignedTargetingOptionDetails from a JSON string
viewability_assigned_targeting_option_details_instance = ViewabilityAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ViewabilityAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
viewability_assigned_targeting_option_details_dict = viewability_assigned_targeting_option_details_instance.to_dict()
# create an instance of ViewabilityAssignedTargetingOptionDetails from a dict
viewability_assigned_targeting_option_details_from_dict = ViewabilityAssignedTargetingOptionDetails.from_dict(viewability_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


