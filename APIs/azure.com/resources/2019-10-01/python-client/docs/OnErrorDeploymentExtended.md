# OnErrorDeploymentExtended

Deployment on error behavior with additional details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_name** | **str** | The deployment to be used on error case. | [optional] 
**provisioning_state** | **str** | The state of the provisioning for the on error deployment. | [optional] [readonly] 
**type** | **str** | The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. | [optional] 

## Example

```python
from openapi_client.models.on_error_deployment_extended import OnErrorDeploymentExtended

# TODO update the JSON string below
json = "{}"
# create an instance of OnErrorDeploymentExtended from a JSON string
on_error_deployment_extended_instance = OnErrorDeploymentExtended.from_json(json)
# print the JSON string representation of the object
print(OnErrorDeploymentExtended.to_json())

# convert the object into a dict
on_error_deployment_extended_dict = on_error_deployment_extended_instance.to_dict()
# create an instance of OnErrorDeploymentExtended from a dict
on_error_deployment_extended_from_dict = OnErrorDeploymentExtended.from_dict(on_error_deployment_extended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


