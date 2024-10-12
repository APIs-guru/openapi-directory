# InquiryInfo

Details about inquired protectable items under a given container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_detail** | [**ErrorDetail**](ErrorDetail.md) |  | [optional] 
**inquiry_details** | [**List[WorkloadInquiryDetails]**](WorkloadInquiryDetails.md) | Inquiry Details which will have workload specific details.  For e.g. - For SQL and oracle this will contain different details. | [optional] 
**status** | **str** | Inquiry Status for this container such as  InProgress | Failed | Succeeded | [optional] 

## Example

```python
from openapi_client.models.inquiry_info import InquiryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InquiryInfo from a JSON string
inquiry_info_instance = InquiryInfo.from_json(json)
# print the JSON string representation of the object
print(InquiryInfo.to_json())

# convert the object into a dict
inquiry_info_dict = inquiry_info_instance.to_dict()
# create an instance of InquiryInfo from a dict
inquiry_info_from_dict = InquiryInfo.from_dict(inquiry_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


