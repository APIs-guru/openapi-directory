# ListDeploymentsResponse

Response with the list of deployments for the specified Apps Script project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[Deployment]**](Deployment.md) | The list of deployments. | [optional] 
**next_page_token** | **str** | The token that can be used in the next call to get the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_deployments_response import ListDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeploymentsResponse from a JSON string
list_deployments_response_instance = ListDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeploymentsResponse.to_json())

# convert the object into a dict
list_deployments_response_dict = list_deployments_response_instance.to_dict()
# create an instance of ListDeploymentsResponse from a dict
list_deployments_response_from_dict = ListDeploymentsResponse.from_dict(list_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


