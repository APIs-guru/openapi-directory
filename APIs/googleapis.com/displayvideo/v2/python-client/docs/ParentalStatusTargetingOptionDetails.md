# ParentalStatusTargetingOptionDetails

Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parental_status** | **str** | Output only. The parental status of an audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.parental_status_targeting_option_details import ParentalStatusTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ParentalStatusTargetingOptionDetails from a JSON string
parental_status_targeting_option_details_instance = ParentalStatusTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ParentalStatusTargetingOptionDetails.to_json())

# convert the object into a dict
parental_status_targeting_option_details_dict = parental_status_targeting_option_details_instance.to_dict()
# create an instance of ParentalStatusTargetingOptionDetails from a dict
parental_status_targeting_option_details_from_dict = ParentalStatusTargetingOptionDetails.from_dict(parental_status_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


