# PolicyListByService200ResponseValueInnerProperties

Policy contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_format** | **str** | Format of the policyContent. | [optional] [default to 'xml']
**policy_content** | **str** | Json escaped Xml Encoded contents of the Policy. | 

## Example

```python
from openapi_client.models.policy_list_by_service200_response_value_inner_properties import PolicyListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyListByService200ResponseValueInnerProperties from a JSON string
policy_list_by_service200_response_value_inner_properties_instance = PolicyListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
policy_list_by_service200_response_value_inner_properties_dict = policy_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of PolicyListByService200ResponseValueInnerProperties from a dict
policy_list_by_service200_response_value_inner_properties_from_dict = PolicyListByService200ResponseValueInnerProperties.from_dict(policy_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


