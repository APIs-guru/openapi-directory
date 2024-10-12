# ServicesCheckStatus200Response

Service health status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The DMS instance agent version | [optional] 
**status** | **str** | The machine-readable status, such as &#39;Initializing&#39;, &#39;Offline&#39;, &#39;Online&#39;, &#39;Deploying&#39;, &#39;Deleting&#39;, &#39;Stopped&#39;, &#39;Stopping&#39;, &#39;Starting&#39;, &#39;FailedToStart&#39;, &#39;FailedToStop&#39; or &#39;Failed&#39; | [optional] 
**supported_task_types** | **List[str]** | The list of supported task types | [optional] 
**vm_size** | **str** | The services virtual machine size, such as &#39;Standard_D2_v2&#39; | [optional] 

## Example

```python
from openapi_client.models.services_check_status200_response import ServicesCheckStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesCheckStatus200Response from a JSON string
services_check_status200_response_instance = ServicesCheckStatus200Response.from_json(json)
# print the JSON string representation of the object
print(ServicesCheckStatus200Response.to_json())

# convert the object into a dict
services_check_status200_response_dict = services_check_status200_response_instance.to_dict()
# create an instance of ServicesCheckStatus200Response from a dict
services_check_status200_response_from_dict = ServicesCheckStatus200Response.from_dict(services_check_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


