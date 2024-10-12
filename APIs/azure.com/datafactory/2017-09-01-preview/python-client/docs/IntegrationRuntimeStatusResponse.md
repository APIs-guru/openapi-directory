# IntegrationRuntimeStatusResponse

Integration runtime status response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The integration runtime name. | [optional] [readonly] 
**properties** | **Dict[str, object]** | Integration runtime status. | 

## Example

```python
from openapi_client.models.integration_runtime_status_response import IntegrationRuntimeStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeStatusResponse from a JSON string
integration_runtime_status_response_instance = IntegrationRuntimeStatusResponse.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeStatusResponse.to_json())

# convert the object into a dict
integration_runtime_status_response_dict = integration_runtime_status_response_instance.to_dict()
# create an instance of IntegrationRuntimeStatusResponse from a dict
integration_runtime_status_response_from_dict = IntegrationRuntimeStatusResponse.from_dict(integration_runtime_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


