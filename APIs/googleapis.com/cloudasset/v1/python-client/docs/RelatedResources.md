# RelatedResources

The related resources of the primary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_resources** | [**List[RelatedResource]**](RelatedResource.md) | The detailed related resources of the primary resource. | [optional] 

## Example

```python
from openapi_client.models.related_resources import RelatedResources

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedResources from a JSON string
related_resources_instance = RelatedResources.from_json(json)
# print the JSON string representation of the object
print(RelatedResources.to_json())

# convert the object into a dict
related_resources_dict = related_resources_instance.to_dict()
# create an instance of RelatedResources from a dict
related_resources_from_dict = RelatedResources.from_dict(related_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


