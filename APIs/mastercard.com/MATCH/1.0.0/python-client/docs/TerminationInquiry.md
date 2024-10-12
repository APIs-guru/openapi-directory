# TerminationInquiry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_offset** | **str** |  | [optional] 
**possible_inquiry_matches** | [**PossibleInquiryMatches**](PossibleInquiryMatches.md) |  | [optional] 
**possible_merchant_matches** | [**List[PossibleMerchantMatches]**](PossibleMerchantMatches.md) |  | [optional] 
**transaction_reference_number** | **str** | User-defined identifier for the inquiry submitted. | [optional] 

## Example

```python
from openapi_client.models.termination_inquiry import TerminationInquiry

# TODO update the JSON string below
json = "{}"
# create an instance of TerminationInquiry from a JSON string
termination_inquiry_instance = TerminationInquiry.from_json(json)
# print the JSON string representation of the object
print(TerminationInquiry.to_json())

# convert the object into a dict
termination_inquiry_dict = termination_inquiry_instance.to_dict()
# create an instance of TerminationInquiry from a dict
termination_inquiry_from_dict = TerminationInquiry.from_dict(termination_inquiry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


