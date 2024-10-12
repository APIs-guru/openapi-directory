# PolicyDescriptionListByService200ResponseValueInnerProperties

Policy description properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Policy description. | [optional] [readonly] 
**scope** | **int** | Binary OR value of the Snippet scope. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_description_list_by_service200_response_value_inner_properties import PolicyDescriptionListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDescriptionListByService200ResponseValueInnerProperties from a JSON string
policy_description_list_by_service200_response_value_inner_properties_instance = PolicyDescriptionListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyDescriptionListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
policy_description_list_by_service200_response_value_inner_properties_dict = policy_description_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of PolicyDescriptionListByService200ResponseValueInnerProperties from a dict
policy_description_list_by_service200_response_value_inner_properties_from_dict = PolicyDescriptionListByService200ResponseValueInnerProperties.from_dict(policy_description_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


