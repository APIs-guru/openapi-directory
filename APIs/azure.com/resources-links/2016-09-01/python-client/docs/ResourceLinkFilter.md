# ResourceLinkFilter

Resource link filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_id** | **str** | The ID of the target resource. | 

## Example

```python
from openapi_client.models.resource_link_filter import ResourceLinkFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLinkFilter from a JSON string
resource_link_filter_instance = ResourceLinkFilter.from_json(json)
# print the JSON string representation of the object
print(ResourceLinkFilter.to_json())

# convert the object into a dict
resource_link_filter_dict = resource_link_filter_instance.to_dict()
# create an instance of ResourceLinkFilter from a dict
resource_link_filter_from_dict = ResourceLinkFilter.from_dict(resource_link_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


