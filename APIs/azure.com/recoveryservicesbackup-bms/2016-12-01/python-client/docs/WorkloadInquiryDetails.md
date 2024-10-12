# WorkloadInquiryDetails

Details of an inquired protectable item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inquiry_validation** | [**InquiryValidation**](InquiryValidation.md) |  | [optional] 
**item_count** | **int** | Contains the protectable item Count inside this Container. | [optional] 
**type** | **str** | Type of the Workload such as SQL, Oracle etc. | [optional] 

## Example

```python
from openapi_client.models.workload_inquiry_details import WorkloadInquiryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadInquiryDetails from a JSON string
workload_inquiry_details_instance = WorkloadInquiryDetails.from_json(json)
# print the JSON string representation of the object
print(WorkloadInquiryDetails.to_json())

# convert the object into a dict
workload_inquiry_details_dict = workload_inquiry_details_instance.to_dict()
# create an instance of WorkloadInquiryDetails from a dict
workload_inquiry_details_from_dict = WorkloadInquiryDetails.from_dict(workload_inquiry_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


