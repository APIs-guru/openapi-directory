# GenderTargetingOptionDetails

Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **str** | Output only. The gender of an audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gender_targeting_option_details import GenderTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GenderTargetingOptionDetails from a JSON string
gender_targeting_option_details_instance = GenderTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(GenderTargetingOptionDetails.to_json())

# convert the object into a dict
gender_targeting_option_details_dict = gender_targeting_option_details_instance.to_dict()
# create an instance of GenderTargetingOptionDetails from a dict
gender_targeting_option_details_from_dict = GenderTargetingOptionDetails.from_dict(gender_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


