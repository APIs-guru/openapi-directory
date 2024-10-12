# ApiOperationPolicyListByOperation200ResponseValueInnerProperties

Policy contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Format of the policyContent. | [optional] [default to 'xml']
**value** | **str** | Contents of the Policy as defined by the format. | 

## Example

```python
from openapi_client.models.api_operation_policy_list_by_operation200_response_value_inner_properties import ApiOperationPolicyListByOperation200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationPolicyListByOperation200ResponseValueInnerProperties from a JSON string
api_operation_policy_list_by_operation200_response_value_inner_properties_instance = ApiOperationPolicyListByOperation200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiOperationPolicyListByOperation200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_operation_policy_list_by_operation200_response_value_inner_properties_dict = api_operation_policy_list_by_operation200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiOperationPolicyListByOperation200ResponseValueInnerProperties from a dict
api_operation_policy_list_by_operation200_response_value_inner_properties_from_dict = ApiOperationPolicyListByOperation200ResponseValueInnerProperties.from_dict(api_operation_policy_list_by_operation200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


