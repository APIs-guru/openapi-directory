# ListApiDeploymentsResponse

Response message for ListApiDeployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_deployments** | [**List[ApiDeployment]**](ApiDeployment.md) | The deployments from the specified publisher. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_api_deployments_response import ListApiDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApiDeploymentsResponse from a JSON string
list_api_deployments_response_instance = ListApiDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListApiDeploymentsResponse.to_json())

# convert the object into a dict
list_api_deployments_response_dict = list_api_deployments_response_instance.to_dict()
# create an instance of ListApiDeploymentsResponse from a dict
list_api_deployments_response_from_dict = ListApiDeploymentsResponse.from_dict(list_api_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


