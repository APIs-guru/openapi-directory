# InformationProtectionPoliciesListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**InformationProtectionPoliciesListDefaultResponseError**](InformationProtectionPoliciesListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.information_protection_policies_list_default_response import InformationProtectionPoliciesListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InformationProtectionPoliciesListDefaultResponse from a JSON string
information_protection_policies_list_default_response_instance = InformationProtectionPoliciesListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(InformationProtectionPoliciesListDefaultResponse.to_json())

# convert the object into a dict
information_protection_policies_list_default_response_dict = information_protection_policies_list_default_response_instance.to_dict()
# create an instance of InformationProtectionPoliciesListDefaultResponse from a dict
information_protection_policies_list_default_response_from_dict = InformationProtectionPoliciesListDefaultResponse.from_dict(information_protection_policies_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


