# DeploymentUpdateLabelEntry

Label object for DeploymentUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key of the label | [optional] 
**value** | **str** | Value of the label | [optional] 

## Example

```python
from openapi_client.models.deployment_update_label_entry import DeploymentUpdateLabelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentUpdateLabelEntry from a JSON string
deployment_update_label_entry_instance = DeploymentUpdateLabelEntry.from_json(json)
# print the JSON string representation of the object
print(DeploymentUpdateLabelEntry.to_json())

# convert the object into a dict
deployment_update_label_entry_dict = deployment_update_label_entry_instance.to_dict()
# create an instance of DeploymentUpdateLabelEntry from a dict
deployment_update_label_entry_from_dict = DeploymentUpdateLabelEntry.from_dict(deployment_update_label_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


