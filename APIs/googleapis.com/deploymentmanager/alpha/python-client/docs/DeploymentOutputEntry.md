# DeploymentOutputEntry

Output object for Deployments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key of the output | [optional] 
**value** | **str** | Value of the label | [optional] 

## Example

```python
from openapi_client.models.deployment_output_entry import DeploymentOutputEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentOutputEntry from a JSON string
deployment_output_entry_instance = DeploymentOutputEntry.from_json(json)
# print the JSON string representation of the object
print(DeploymentOutputEntry.to_json())

# convert the object into a dict
deployment_output_entry_dict = deployment_output_entry_instance.to_dict()
# create an instance of DeploymentOutputEntry from a dict
deployment_output_entry_from_dict = DeploymentOutputEntry.from_dict(deployment_output_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


