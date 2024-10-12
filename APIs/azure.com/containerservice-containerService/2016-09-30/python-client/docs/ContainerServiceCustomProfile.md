# ContainerServiceCustomProfile

Properties to configure a custom container service cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orchestrator** | **str** | The name of the custom orchestrator to use. | 

## Example

```python
from openapi_client.models.container_service_custom_profile import ContainerServiceCustomProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceCustomProfile from a JSON string
container_service_custom_profile_instance = ContainerServiceCustomProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceCustomProfile.to_json())

# convert the object into a dict
container_service_custom_profile_dict = container_service_custom_profile_instance.to_dict()
# create an instance of ContainerServiceCustomProfile from a dict
container_service_custom_profile_from_dict = ContainerServiceCustomProfile.from_dict(container_service_custom_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


