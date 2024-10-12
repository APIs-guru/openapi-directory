# OnErrorDeployment

Deployment on error behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_name** | **str** | The deployment to be used on error case. | [optional] 
**type** | **str** | The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. | [optional] 

## Example

```python
from openapi_client.models.on_error_deployment import OnErrorDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of OnErrorDeployment from a JSON string
on_error_deployment_instance = OnErrorDeployment.from_json(json)
# print the JSON string representation of the object
print(OnErrorDeployment.to_json())

# convert the object into a dict
on_error_deployment_dict = on_error_deployment_instance.to_dict()
# create an instance of OnErrorDeployment from a dict
on_error_deployment_from_dict = OnErrorDeployment.from_dict(on_error_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


