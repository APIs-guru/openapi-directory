# TerminationInquiryRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**termination_inquiry_request** | [**TerminationInquiryRequest**](TerminationInquiryRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.termination_inquiry_request_schema import TerminationInquiryRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TerminationInquiryRequestSchema from a JSON string
termination_inquiry_request_schema_instance = TerminationInquiryRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TerminationInquiryRequestSchema.to_json())

# convert the object into a dict
termination_inquiry_request_schema_dict = termination_inquiry_request_schema_instance.to_dict()
# create an instance of TerminationInquiryRequestSchema from a dict
termination_inquiry_request_schema_from_dict = TerminationInquiryRequestSchema.from_dict(termination_inquiry_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


