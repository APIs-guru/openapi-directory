# ListApiDeploymentRevisionsResponse

Response message for ListApiDeploymentRevisionsResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_deployments** | [**List[ApiDeployment]**](ApiDeployment.md) | The revisions of the deployment. | [optional] 
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_api_deployment_revisions_response import ListApiDeploymentRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApiDeploymentRevisionsResponse from a JSON string
list_api_deployment_revisions_response_instance = ListApiDeploymentRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListApiDeploymentRevisionsResponse.to_json())

# convert the object into a dict
list_api_deployment_revisions_response_dict = list_api_deployment_revisions_response_instance.to_dict()
# create an instance of ListApiDeploymentRevisionsResponse from a dict
list_api_deployment_revisions_response_from_dict = ListApiDeploymentRevisionsResponse.from_dict(list_api_deployment_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


