# ExternalResource

Definition of a Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | Extension resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_resource import ExternalResource

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalResource from a JSON string
external_resource_instance = ExternalResource.from_json(json)
# print the JSON string representation of the object
print(ExternalResource.to_json())

# convert the object into a dict
external_resource_dict = external_resource_instance.to_dict()
# create an instance of ExternalResource from a dict
external_resource_from_dict = ExternalResource.from_dict(external_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


