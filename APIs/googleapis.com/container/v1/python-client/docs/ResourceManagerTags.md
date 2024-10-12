# ResourceManagerTags

A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | TagKeyValue must be in one of the following formats ([KEY]&#x3D;[VALUE]) 1. &#x60;tagKeys/{tag_key_id}&#x3D;tagValues/{tag_value_id}&#x60; 2. &#x60;{org_id}/{tag_key_name}&#x3D;{tag_value_name}&#x60; 3. &#x60;{project_id}/{tag_key_name}&#x3D;{tag_value_name}&#x60; | [optional] 

## Example

```python
from openapi_client.models.resource_manager_tags import ResourceManagerTags

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceManagerTags from a JSON string
resource_manager_tags_instance = ResourceManagerTags.from_json(json)
# print the JSON string representation of the object
print(ResourceManagerTags.to_json())

# convert the object into a dict
resource_manager_tags_dict = resource_manager_tags_instance.to_dict()
# create an instance of ResourceManagerTags from a dict
resource_manager_tags_from_dict = ResourceManagerTags.from_dict(resource_manager_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


