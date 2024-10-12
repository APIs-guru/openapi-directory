# RetroInquiryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**possible_merchant_matches** | [**PossibleMerchantMatches**](PossibleMerchantMatches.md) |  | [optional] 

## Example

```python
from openapi_client.models.retro_inquiry_response import RetroInquiryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetroInquiryResponse from a JSON string
retro_inquiry_response_instance = RetroInquiryResponse.from_json(json)
# print the JSON string representation of the object
print(RetroInquiryResponse.to_json())

# convert the object into a dict
retro_inquiry_response_dict = retro_inquiry_response_instance.to_dict()
# create an instance of RetroInquiryResponse from a dict
retro_inquiry_response_from_dict = RetroInquiryResponse.from_dict(retro_inquiry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


