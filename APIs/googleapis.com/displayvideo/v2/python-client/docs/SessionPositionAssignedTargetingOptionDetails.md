# SessionPositionAssignedTargetingOptionDetails

Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_position** | **str** | The position where the ad will show in a session. | [optional] 

## Example

```python
from openapi_client.models.session_position_assigned_targeting_option_details import SessionPositionAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPositionAssignedTargetingOptionDetails from a JSON string
session_position_assigned_targeting_option_details_instance = SessionPositionAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(SessionPositionAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
session_position_assigned_targeting_option_details_dict = session_position_assigned_targeting_option_details_instance.to_dict()
# create an instance of SessionPositionAssignedTargetingOptionDetails from a dict
session_position_assigned_targeting_option_details_from_dict = SessionPositionAssignedTargetingOptionDetails.from_dict(session_position_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


