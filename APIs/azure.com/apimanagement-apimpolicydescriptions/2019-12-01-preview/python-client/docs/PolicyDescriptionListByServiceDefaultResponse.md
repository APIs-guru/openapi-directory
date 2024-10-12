# PolicyDescriptionListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PolicyDescriptionListByServiceDefaultResponseError**](PolicyDescriptionListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_description_list_by_service_default_response import PolicyDescriptionListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDescriptionListByServiceDefaultResponse from a JSON string
policy_description_list_by_service_default_response_instance = PolicyDescriptionListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PolicyDescriptionListByServiceDefaultResponse.to_json())

# convert the object into a dict
policy_description_list_by_service_default_response_dict = policy_description_list_by_service_default_response_instance.to_dict()
# create an instance of PolicyDescriptionListByServiceDefaultResponse from a dict
policy_description_list_by_service_default_response_from_dict = PolicyDescriptionListByServiceDefaultResponse.from_dict(policy_description_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


