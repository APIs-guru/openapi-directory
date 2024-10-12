# LinkedResource

Reference to a linked resource tracked by this Subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_dataset** | **str** | Output only. Name of the linked dataset, e.g. projects/subscriberproject/datasets/linked_dataset | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_resource import LinkedResource

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedResource from a JSON string
linked_resource_instance = LinkedResource.from_json(json)
# print the JSON string representation of the object
print(LinkedResource.to_json())

# convert the object into a dict
linked_resource_dict = linked_resource_instance.to_dict()
# create an instance of LinkedResource from a dict
linked_resource_from_dict = LinkedResource.from_dict(linked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


