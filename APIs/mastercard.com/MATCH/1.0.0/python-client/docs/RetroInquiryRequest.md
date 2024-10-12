# RetroInquiryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inquiry_reference_number** | **str** | This is the reference number that was obtained from Retroactive Inquiry Summary resource. | [optional] 

## Example

```python
from openapi_client.models.retro_inquiry_request import RetroInquiryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RetroInquiryRequest from a JSON string
retro_inquiry_request_instance = RetroInquiryRequest.from_json(json)
# print the JSON string representation of the object
print(RetroInquiryRequest.to_json())

# convert the object into a dict
retro_inquiry_request_dict = retro_inquiry_request_instance.to_dict()
# create an instance of RetroInquiryRequest from a dict
retro_inquiry_request_from_dict = RetroInquiryRequest.from_dict(retro_inquiry_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


