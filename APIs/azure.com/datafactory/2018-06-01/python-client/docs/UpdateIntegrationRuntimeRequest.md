# UpdateIntegrationRuntimeRequest

Update integration runtime request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_update** | **str** | The state of integration runtime auto update. | [optional] 
**update_delay_offset** | **str** | The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time. | [optional] 

## Example

```python
from openapi_client.models.update_integration_runtime_request import UpdateIntegrationRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIntegrationRuntimeRequest from a JSON string
update_integration_runtime_request_instance = UpdateIntegrationRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateIntegrationRuntimeRequest.to_json())

# convert the object into a dict
update_integration_runtime_request_dict = update_integration_runtime_request_instance.to_dict()
# create an instance of UpdateIntegrationRuntimeRequest from a dict
update_integration_runtime_request_from_dict = UpdateIntegrationRuntimeRequest.from_dict(update_integration_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


