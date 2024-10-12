# ContainerProperties

The container properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_status** | **str** | Current status of the container. | [optional] [readonly] 
**created_date_time** | **datetime** | The UTC time when container got created. | [optional] [readonly] 
**data_format** | **str** | DataFormat for Container | 
**refresh_details** | [**RefreshDetails**](RefreshDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_properties import ContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerProperties from a JSON string
container_properties_instance = ContainerProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerProperties.to_json())

# convert the object into a dict
container_properties_dict = container_properties_instance.to_dict()
# create an instance of ContainerProperties from a dict
container_properties_from_dict = ContainerProperties.from_dict(container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


