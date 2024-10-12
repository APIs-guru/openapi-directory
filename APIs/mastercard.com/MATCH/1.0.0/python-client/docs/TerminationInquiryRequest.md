# TerminationInquiryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_id** | **str** | The Member ICA number which is used to validate that the application has permission to hit the MATCH database. This number must be obtained from a participating MATCH acquiring bank or entity before a developer can access the MATCH resource. | 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**transaction_reference_number** | **str** | User-defined identifier for the inquiry submitted. | [optional] 

## Example

```python
from openapi_client.models.termination_inquiry_request import TerminationInquiryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TerminationInquiryRequest from a JSON string
termination_inquiry_request_instance = TerminationInquiryRequest.from_json(json)
# print the JSON string representation of the object
print(TerminationInquiryRequest.to_json())

# convert the object into a dict
termination_inquiry_request_dict = termination_inquiry_request_instance.to_dict()
# create an instance of TerminationInquiryRequest from a dict
termination_inquiry_request_from_dict = TerminationInquiryRequest.from_dict(termination_inquiry_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


