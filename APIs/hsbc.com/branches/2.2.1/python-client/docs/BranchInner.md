# BranchInner

Information that locates and identifies a specific branch of a financial institution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **List[str]** | Accessibility is the ability and ease a customer can access a service, good, associate, or facility. Features which make the Bank accessible to disabled people | [optional] 
**availability** | **object** | Days and times defining when the branch is available for use by a customer | [optional] 
**contact_info** | [**List[ContactInfoInner]**](ContactInfoInner.md) | Communication device number or electronic address used for communication. | [optional] 
**customer_segment** | **List[str]** | The marketing segment which the branch is able to address in terms of customer type. Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another | 
**identification** | **str** | Unique and unambiguous identification of a branch of a financial institution. | 
**name** | **str** | Name by which a branch is known and which is usually used to identify that branch. | [optional] 
**note** | **str** | Summary description of services, facility and availability. | [optional] 
**other_accessibility** | [**List[OtherAccessibilityInner]**](OtherAccessibilityInner.md) | Enter any new code , name and description for any other Accessibility | [optional] 
**other_customer_segment** | [**List[OtherCustomerSegmentInner]**](OtherCustomerSegmentInner.md) | Enter a new code , name and description for any other Customer Segment | [optional] 
**other_service_and_facility** | [**List[OtherServiceAndFacilityInner]**](OtherServiceAndFacilityInner.md) | Enter any new code , name and description for any Other Facility | [optional] 
**photo** | **str** | Image related to the branch | [optional] 
**postal_address** | **object** | Information that locates and identifies a specific address, as defined by postal services. | 
**sequence_number** | **str** | Sequence Number that is used in conjunction with Identification to uniquely identify a branch. Physical branches should have 0 assigned, mobile and sub branches should have 1,2,3....etc. assigned. | 
**service_and_facility** | **List[str]** | Service/Facilities offered at a branch. | [optional] 
**sort_code** | **List[str]** | United Kingdom (UK) Sort Code - identifies British financial institutions on the British national clearing systems. The sort code, which is a six-digit number, is usually formatted as three pairs of numbers, for example 12-34-56. It identifies both the bank and the branch(s) where the account is held. | [optional] 
**type** | **str** | Codeset to indicate if a branch is physically in 1 location or is mobile | 

## Example

```python
from openapi_client.models.branch_inner import BranchInner

# TODO update the JSON string below
json = "{}"
# create an instance of BranchInner from a JSON string
branch_inner_instance = BranchInner.from_json(json)
# print the JSON string representation of the object
print(BranchInner.to_json())

# convert the object into a dict
branch_inner_dict = branch_inner_instance.to_dict()
# create an instance of BranchInner from a dict
branch_inner_from_dict = BranchInner.from_dict(branch_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


