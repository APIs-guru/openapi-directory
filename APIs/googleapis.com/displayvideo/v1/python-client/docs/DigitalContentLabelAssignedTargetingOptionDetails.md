# DigitalContentLabelAssignedTargetingOptionDetails

Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_rating_tier** | **str** | Output only. The display name of the digital content label rating tier. | [optional] [readonly] 
**excluded_targeting_option_id** | **str** | Required. ID of the digital content label to be EXCLUDED. | [optional] 

## Example

```python
from openapi_client.models.digital_content_label_assigned_targeting_option_details import DigitalContentLabelAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalContentLabelAssignedTargetingOptionDetails from a JSON string
digital_content_label_assigned_targeting_option_details_instance = DigitalContentLabelAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DigitalContentLabelAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
digital_content_label_assigned_targeting_option_details_dict = digital_content_label_assigned_targeting_option_details_instance.to_dict()
# create an instance of DigitalContentLabelAssignedTargetingOptionDetails from a dict
digital_content_label_assigned_targeting_option_details_from_dict = DigitalContentLabelAssignedTargetingOptionDetails.from_dict(digital_content_label_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


