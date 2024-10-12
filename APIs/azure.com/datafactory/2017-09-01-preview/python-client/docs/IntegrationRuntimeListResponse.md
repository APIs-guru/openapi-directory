# IntegrationRuntimeListResponse

A list of integration runtime resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[IntegrationRuntimeResource]**](IntegrationRuntimeResource.md) | List of integration runtimes. | 

## Example

```python
from openapi_client.models.integration_runtime_list_response import IntegrationRuntimeListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeListResponse from a JSON string
integration_runtime_list_response_instance = IntegrationRuntimeListResponse.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeListResponse.to_json())

# convert the object into a dict
integration_runtime_list_response_dict = integration_runtime_list_response_instance.to_dict()
# create an instance of IntegrationRuntimeListResponse from a dict
integration_runtime_list_response_from_dict = IntegrationRuntimeListResponse.from_dict(integration_runtime_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


