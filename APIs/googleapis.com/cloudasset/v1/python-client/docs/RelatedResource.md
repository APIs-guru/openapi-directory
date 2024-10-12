# RelatedResource

The detailed related resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The type of the asset. Example: &#x60;compute.googleapis.com/Instance&#x60; | [optional] 
**full_resource_name** | **str** | The full resource name of the related resource. Example: &#x60;//compute.googleapis.com/projects/my_proj_123/zones/instance/instance123&#x60; | [optional] 

## Example

```python
from openapi_client.models.related_resource import RelatedResource

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedResource from a JSON string
related_resource_instance = RelatedResource.from_json(json)
# print the JSON string representation of the object
print(RelatedResource.to_json())

# convert the object into a dict
related_resource_dict = related_resource_instance.to_dict()
# create an instance of RelatedResource from a dict
related_resource_from_dict = RelatedResource.from_dict(related_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


