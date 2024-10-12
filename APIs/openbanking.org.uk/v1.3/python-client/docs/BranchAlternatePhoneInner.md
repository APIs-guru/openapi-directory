# BranchAlternatePhoneInner

Alternative Phone Number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_telephone_number** | **str** | Collection of information that identifies a phone number, as defined by telecom services. | [optional] 
**alternate_telephone_number_description** | **str** | Description of the telephone number | [optional] 

## Example

```python
from openapi_client.models.branch_alternate_phone_inner import BranchAlternatePhoneInner

# TODO update the JSON string below
json = "{}"
# create an instance of BranchAlternatePhoneInner from a JSON string
branch_alternate_phone_inner_instance = BranchAlternatePhoneInner.from_json(json)
# print the JSON string representation of the object
print(BranchAlternatePhoneInner.to_json())

# convert the object into a dict
branch_alternate_phone_inner_dict = branch_alternate_phone_inner_instance.to_dict()
# create an instance of BranchAlternatePhoneInner from a dict
branch_alternate_phone_inner_from_dict = BranchAlternatePhoneInner.from_dict(branch_alternate_phone_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


