# ResourceId

A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required field for the type-specific id. This should correspond to the id used in the type-specific API&#39;s. | [optional] 
**type** | **str** | Required field representing the resource type this id is for. At present, the valid types are \&quot;project\&quot;, \&quot;folder\&quot;, and \&quot;organization\&quot;. | [optional] 

## Example

```python
from openapi_client.models.resource_id import ResourceId

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceId from a JSON string
resource_id_instance = ResourceId.from_json(json)
# print the JSON string representation of the object
print(ResourceId.to_json())

# convert the object into a dict
resource_id_dict = resource_id_instance.to_dict()
# create an instance of ResourceId from a dict
resource_id_from_dict = ResourceId.from_dict(resource_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


