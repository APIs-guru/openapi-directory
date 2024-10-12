# DeploymentsListResponse

A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[Deployment]**](Deployment.md) | Output only. The deployments contained in this response. | [optional] 
**next_page_token** | **str** | Output only. A token used to continue a truncated list request. | [optional] 

## Example

```python
from openapi_client.models.deployments_list_response import DeploymentsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentsListResponse from a JSON string
deployments_list_response_instance = DeploymentsListResponse.from_json(json)
# print the JSON string representation of the object
print(DeploymentsListResponse.to_json())

# convert the object into a dict
deployments_list_response_dict = deployments_list_response_instance.to_dict()
# create an instance of DeploymentsListResponse from a dict
deployments_list_response_from_dict = DeploymentsListResponse.from_dict(deployments_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


