# GrafeasV1beta1DeploymentDetails

Details of a deployment occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**Deployment**](Deployment.md) |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1beta1_deployment_details import GrafeasV1beta1DeploymentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1beta1DeploymentDetails from a JSON string
grafeas_v1beta1_deployment_details_instance = GrafeasV1beta1DeploymentDetails.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1beta1DeploymentDetails.to_json())

# convert the object into a dict
grafeas_v1beta1_deployment_details_dict = grafeas_v1beta1_deployment_details_instance.to_dict()
# create an instance of GrafeasV1beta1DeploymentDetails from a dict
grafeas_v1beta1_deployment_details_from_dict = GrafeasV1beta1DeploymentDetails.from_dict(grafeas_v1beta1_deployment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


