# OtherCustomerSegmentInner

Enter a new code , name and description for any other Customer Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_customer_segment_inner import OtherCustomerSegmentInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherCustomerSegmentInner from a JSON string
other_customer_segment_inner_instance = OtherCustomerSegmentInner.from_json(json)
# print the JSON string representation of the object
print(OtherCustomerSegmentInner.to_json())

# convert the object into a dict
other_customer_segment_inner_dict = other_customer_segment_inner_instance.to_dict()
# create an instance of OtherCustomerSegmentInner from a dict
other_customer_segment_inner_from_dict = OtherCustomerSegmentInner.from_dict(other_customer_segment_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


