# IntegrationRuntimeStatusListResponse

A list of integration runtime status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[IntegrationRuntimeStatusResponse]**](IntegrationRuntimeStatusResponse.md) | List of integration runtime status. | 

## Example

```python
from openapi_client.models.integration_runtime_status_list_response import IntegrationRuntimeStatusListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeStatusListResponse from a JSON string
integration_runtime_status_list_response_instance = IntegrationRuntimeStatusListResponse.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeStatusListResponse.to_json())

# convert the object into a dict
integration_runtime_status_list_response_dict = integration_runtime_status_list_response_instance.to_dict()
# create an instance of IntegrationRuntimeStatusListResponse from a dict
integration_runtime_status_list_response_from_dict = IntegrationRuntimeStatusListResponse.from_dict(integration_runtime_status_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


