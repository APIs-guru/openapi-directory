# ContainerLabel

Describes a container label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the container label. | 
**value** | **str** | The value of the container label. | 

## Example

```python
from openapi_client.models.container_label import ContainerLabel

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerLabel from a JSON string
container_label_instance = ContainerLabel.from_json(json)
# print the JSON string representation of the object
print(ContainerLabel.to_json())

# convert the object into a dict
container_label_dict = container_label_instance.to_dict()
# create an instance of ContainerLabel from a dict
container_label_from_dict = ContainerLabel.from_dict(container_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


