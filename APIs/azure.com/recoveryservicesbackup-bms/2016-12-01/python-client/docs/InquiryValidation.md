# InquiryValidation

Validation for inquired protectable items under a given container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_detail** | **str** | Error Additional Detail in case the status is non-success. | [optional] [readonly] 
**error_detail** | [**ErrorDetail**](ErrorDetail.md) |  | [optional] 
**status** | **str** | Status for the Inquiry Validation. | [optional] 

## Example

```python
from openapi_client.models.inquiry_validation import InquiryValidation

# TODO update the JSON string below
json = "{}"
# create an instance of InquiryValidation from a JSON string
inquiry_validation_instance = InquiryValidation.from_json(json)
# print the JSON string representation of the object
print(InquiryValidation.to_json())

# convert the object into a dict
inquiry_validation_dict = inquiry_validation_instance.to_dict()
# create an instance of InquiryValidation from a dict
inquiry_validation_from_dict = InquiryValidation.from_dict(inquiry_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


