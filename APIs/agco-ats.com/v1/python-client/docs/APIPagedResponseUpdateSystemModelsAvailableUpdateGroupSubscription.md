# APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsAvailableUpdateGroupSubscription]**](UpdateSystemModelsAvailableUpdateGroupSubscription.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_available_update_group_subscription import APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription from a JSON string
api_paged_response_update_system_models_available_update_group_subscription_instance = APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription.to_json())

# convert the object into a dict
api_paged_response_update_system_models_available_update_group_subscription_dict = api_paged_response_update_system_models_available_update_group_subscription_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription from a dict
api_paged_response_update_system_models_available_update_group_subscription_from_dict = APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription.from_dict(api_paged_response_update_system_models_available_update_group_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


