# TerminationInquirySchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**termination_inquiry** | [**TerminationInquiry**](TerminationInquiry.md) |  | [optional] 

## Example

```python
from openapi_client.models.termination_inquiry_schema import TerminationInquirySchema

# TODO update the JSON string below
json = "{}"
# create an instance of TerminationInquirySchema from a JSON string
termination_inquiry_schema_instance = TerminationInquirySchema.from_json(json)
# print the JSON string representation of the object
print(TerminationInquirySchema.to_json())

# convert the object into a dict
termination_inquiry_schema_dict = termination_inquiry_schema_instance.to_dict()
# create an instance of TerminationInquirySchema from a dict
termination_inquiry_schema_from_dict = TerminationInquirySchema.from_dict(termination_inquiry_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


