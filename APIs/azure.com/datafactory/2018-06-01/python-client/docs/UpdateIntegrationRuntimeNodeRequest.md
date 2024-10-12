# UpdateIntegrationRuntimeNodeRequest

Update integration runtime node request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_jobs_limit** | **int** | The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed. | [optional] 

## Example

```python
from openapi_client.models.update_integration_runtime_node_request import UpdateIntegrationRuntimeNodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIntegrationRuntimeNodeRequest from a JSON string
update_integration_runtime_node_request_instance = UpdateIntegrationRuntimeNodeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateIntegrationRuntimeNodeRequest.to_json())

# convert the object into a dict
update_integration_runtime_node_request_dict = update_integration_runtime_node_request_instance.to_dict()
# create an instance of UpdateIntegrationRuntimeNodeRequest from a dict
update_integration_runtime_node_request_from_dict = UpdateIntegrationRuntimeNodeRequest.from_dict(update_integration_runtime_node_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


