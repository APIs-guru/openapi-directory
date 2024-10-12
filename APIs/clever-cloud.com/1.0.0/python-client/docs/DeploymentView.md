# DeploymentView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**author** | [**DeploymentViewAuthor**](DeploymentViewAuthor.md) |  | [optional] 
**cause** | **str** |  | 
**commit** | **str** |  | 
**var_date** | **date** |  | 
**id** | **int** |  | 
**instances** | **int** |  | 
**state** | **str** |  | 
**uuid** | **str** |  | 

## Example

```python
from openapi_client.models.deployment_view import DeploymentView

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentView from a JSON string
deployment_view_instance = DeploymentView.from_json(json)
# print the JSON string representation of the object
print(DeploymentView.to_json())

# convert the object into a dict
deployment_view_dict = deployment_view_instance.to_dict()
# create an instance of DeploymentView from a dict
deployment_view_from_dict = DeploymentView.from_dict(deployment_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


