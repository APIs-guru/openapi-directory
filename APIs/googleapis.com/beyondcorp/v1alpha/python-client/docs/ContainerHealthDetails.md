# ContainerHealthDetails

ContainerHealthDetails reflects the health details of a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_config_version** | **str** | The version of the current config. | [optional] 
**error_msg** | **str** | The latest error message. | [optional] 
**expected_config_version** | **str** | The version of the expected config. | [optional] 
**extended_status** | **Dict[str, str]** | The extended status. Such as ExitCode, StartedAt, FinishedAt, etc. | [optional] 

## Example

```python
from openapi_client.models.container_health_details import ContainerHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerHealthDetails from a JSON string
container_health_details_instance = ContainerHealthDetails.from_json(json)
# print the JSON string representation of the object
print(ContainerHealthDetails.to_json())

# convert the object into a dict
container_health_details_dict = container_health_details_instance.to_dict()
# create an instance of ContainerHealthDetails from a dict
container_health_details_from_dict = ContainerHealthDetails.from_dict(container_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


