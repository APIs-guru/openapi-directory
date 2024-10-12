# ViewabilityTargetingOptionDetails

Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewability** | **str** | Output only. The predicted viewability percentage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.viewability_targeting_option_details import ViewabilityTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ViewabilityTargetingOptionDetails from a JSON string
viewability_targeting_option_details_instance = ViewabilityTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ViewabilityTargetingOptionDetails.to_json())

# convert the object into a dict
viewability_targeting_option_details_dict = viewability_targeting_option_details_instance.to_dict()
# create an instance of ViewabilityTargetingOptionDetails from a dict
viewability_targeting_option_details_from_dict = ViewabilityTargetingOptionDetails.from_dict(viewability_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


