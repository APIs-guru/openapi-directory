# OmidTargetingOptionDetails

Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**omid** | **str** | Output only. The type of Open Measurement enabled inventory. | [optional] [readonly] 

## Example

```python
from openapi_client.models.omid_targeting_option_details import OmidTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OmidTargetingOptionDetails from a JSON string
omid_targeting_option_details_instance = OmidTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OmidTargetingOptionDetails.to_json())

# convert the object into a dict
omid_targeting_option_details_dict = omid_targeting_option_details_instance.to_dict()
# create an instance of OmidTargetingOptionDetails from a dict
omid_targeting_option_details_from_dict = OmidTargetingOptionDetails.from_dict(omid_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


