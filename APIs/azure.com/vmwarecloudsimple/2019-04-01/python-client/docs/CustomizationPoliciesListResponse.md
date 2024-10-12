# CustomizationPoliciesListResponse

List of customization polices response model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of the Customization policy | [optional] 
**value** | [**List[CustomizationPolicy]**](CustomizationPolicy.md) | List of the customization policies | [optional] 

## Example

```python
from openapi_client.models.customization_policies_list_response import CustomizationPoliciesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationPoliciesListResponse from a JSON string
customization_policies_list_response_instance = CustomizationPoliciesListResponse.from_json(json)
# print the JSON string representation of the object
print(CustomizationPoliciesListResponse.to_json())

# convert the object into a dict
customization_policies_list_response_dict = customization_policies_list_response_instance.to_dict()
# create an instance of CustomizationPoliciesListResponse from a dict
customization_policies_list_response_from_dict = CustomizationPoliciesListResponse.from_dict(customization_policies_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


