# DigitalContentLabelTargetingOptionDetails

Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_rating_tier** | **str** | Output only. An enum for the content label brand safety tiers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.digital_content_label_targeting_option_details import DigitalContentLabelTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalContentLabelTargetingOptionDetails from a JSON string
digital_content_label_targeting_option_details_instance = DigitalContentLabelTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DigitalContentLabelTargetingOptionDetails.to_json())

# convert the object into a dict
digital_content_label_targeting_option_details_dict = digital_content_label_targeting_option_details_instance.to_dict()
# create an instance of DigitalContentLabelTargetingOptionDetails from a dict
digital_content_label_targeting_option_details_from_dict = DigitalContentLabelTargetingOptionDetails.from_dict(digital_content_label_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


