# Resource

An entity that can have metadata. For example, a Docker image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_hash** | [**Hash**](Hash.md) |  | [optional] 
**name** | **str** | Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - \&quot;Debian\&quot;. | [optional] 
**uri** | **str** | Required. The unique URI of the resource. For example, &#x60;https://gcr.io/project/image@sha256:foo&#x60; for a Docker image. | [optional] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


