# ContainerStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_status** | **str** |  | [optional] 
**api_status_message** | **str** |  | [optional] 
**service** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.container_status import ContainerStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerStatus from a JSON string
container_status_instance = ContainerStatus.from_json(json)
# print the JSON string representation of the object
print(ContainerStatus.to_json())

# convert the object into a dict
container_status_dict = container_status_instance.to_dict()
# create an instance of ContainerStatus from a dict
container_status_from_dict = ContainerStatus.from_dict(container_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


