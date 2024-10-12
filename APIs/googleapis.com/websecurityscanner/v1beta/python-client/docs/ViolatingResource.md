# ViolatingResource

Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The MIME type of this resource. | [optional] 
**resource_url** | **str** | URL of this violating resource. | [optional] 

## Example

```python
from openapi_client.models.violating_resource import ViolatingResource

# TODO update the JSON string below
json = "{}"
# create an instance of ViolatingResource from a JSON string
violating_resource_instance = ViolatingResource.from_json(json)
# print the JSON string representation of the object
print(ViolatingResource.to_json())

# convert the object into a dict
violating_resource_dict = violating_resource_instance.to_dict()
# create an instance of ViolatingResource from a dict
violating_resource_from_dict = ViolatingResource.from_dict(violating_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


