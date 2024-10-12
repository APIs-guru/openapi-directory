# ProjectConfig

Cloud Source Repositories configuration of a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_private_key_check** | **bool** | Reject a Git push that contains a private key. | [optional] 
**name** | **str** | The name of the project. Values are of the form &#x60;projects/&#x60;. | [optional] 
**pubsub_configs** | [**Dict[str, PubsubConfig]**](PubsubConfig.md) | How this project publishes a change in the repositories through Cloud Pub/Sub. Keyed by the topic names. | [optional] 

## Example

```python
from openapi_client.models.project_config import ProjectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectConfig from a JSON string
project_config_instance = ProjectConfig.from_json(json)
# print the JSON string representation of the object
print(ProjectConfig.to_json())

# convert the object into a dict
project_config_dict = project_config_instance.to_dict()
# create an instance of ProjectConfig from a dict
project_config_from_dict = ProjectConfig.from_dict(project_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


