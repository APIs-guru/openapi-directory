# PossibleInquiryMatches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inquired_merchant** | [**List[InquiredMerchant]**](InquiredMerchant.md) |  | [optional] 
**total_length** | **str** | The total length of the result set from possible merchant matches of inquiry. | [optional] 

## Example

```python
from openapi_client.models.possible_inquiry_matches import PossibleInquiryMatches

# TODO update the JSON string below
json = "{}"
# create an instance of PossibleInquiryMatches from a JSON string
possible_inquiry_matches_instance = PossibleInquiryMatches.from_json(json)
# print the JSON string representation of the object
print(PossibleInquiryMatches.to_json())

# convert the object into a dict
possible_inquiry_matches_dict = possible_inquiry_matches_instance.to_dict()
# create an instance of PossibleInquiryMatches from a dict
possible_inquiry_matches_from_dict = PossibleInquiryMatches.from_dict(possible_inquiry_matches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


