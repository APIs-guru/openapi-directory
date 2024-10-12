# KeywordAssignedTargetingOptionDetails

Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **str** | Required. The keyword, for example &#x60;car insurance&#x60;. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. | [optional] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 

## Example

```python
from openapi_client.models.keyword_assigned_targeting_option_details import KeywordAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordAssignedTargetingOptionDetails from a JSON string
keyword_assigned_targeting_option_details_instance = KeywordAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(KeywordAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
keyword_assigned_targeting_option_details_dict = keyword_assigned_targeting_option_details_instance.to_dict()
# create an instance of KeywordAssignedTargetingOptionDetails from a dict
keyword_assigned_targeting_option_details_from_dict = KeywordAssignedTargetingOptionDetails.from_dict(keyword_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


