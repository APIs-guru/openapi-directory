# NegativeKeywordListAssignedTargetingOptionDetails

Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keyword_list_id** | **str** | Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource. | [optional] 

## Example

```python
from openapi_client.models.negative_keyword_list_assigned_targeting_option_details import NegativeKeywordListAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeywordListAssignedTargetingOptionDetails from a JSON string
negative_keyword_list_assigned_targeting_option_details_instance = NegativeKeywordListAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(NegativeKeywordListAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
negative_keyword_list_assigned_targeting_option_details_dict = negative_keyword_list_assigned_targeting_option_details_instance.to_dict()
# create an instance of NegativeKeywordListAssignedTargetingOptionDetails from a dict
negative_keyword_list_assigned_targeting_option_details_from_dict = NegativeKeywordListAssignedTargetingOptionDetails.from_dict(negative_keyword_list_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


