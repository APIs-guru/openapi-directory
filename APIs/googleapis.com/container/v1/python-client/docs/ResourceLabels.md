# ResourceLabels

Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Map of node label keys and node label values. | [optional] 

## Example

```python
from openapi_client.models.resource_labels import ResourceLabels

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLabels from a JSON string
resource_labels_instance = ResourceLabels.from_json(json)
# print the JSON string representation of the object
print(ResourceLabels.to_json())

# convert the object into a dict
resource_labels_dict = resource_labels_instance.to_dict()
# create an instance of ResourceLabels from a dict
resource_labels_from_dict = ResourceLabels.from_dict(resource_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


