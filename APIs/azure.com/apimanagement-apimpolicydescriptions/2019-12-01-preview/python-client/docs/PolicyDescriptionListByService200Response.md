# PolicyDescriptionListByService200Response

Descriptions of APIM policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number. | [optional] 
**value** | [**List[PolicyDescriptionListByService200ResponseValueInner]**](PolicyDescriptionListByService200ResponseValueInner.md) | Descriptions of APIM policies. | [optional] 

## Example

```python
from openapi_client.models.policy_description_list_by_service200_response import PolicyDescriptionListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDescriptionListByService200Response from a JSON string
policy_description_list_by_service200_response_instance = PolicyDescriptionListByService200Response.from_json(json)
# print the JSON string representation of the object
print(PolicyDescriptionListByService200Response.to_json())

# convert the object into a dict
policy_description_list_by_service200_response_dict = policy_description_list_by_service200_response_instance.to_dict()
# create an instance of PolicyDescriptionListByService200Response from a dict
policy_description_list_by_service200_response_from_dict = PolicyDescriptionListByService200Response.from_dict(policy_description_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


