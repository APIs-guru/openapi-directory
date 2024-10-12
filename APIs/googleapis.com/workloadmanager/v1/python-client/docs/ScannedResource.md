# ScannedResource

Message of scanned resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | resource name | [optional] 
**type** | **str** | resource type | [optional] 

## Example

```python
from openapi_client.models.scanned_resource import ScannedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ScannedResource from a JSON string
scanned_resource_instance = ScannedResource.from_json(json)
# print the JSON string representation of the object
print(ScannedResource.to_json())

# convert the object into a dict
scanned_resource_dict = scanned_resource_instance.to_dict()
# create an instance of ScannedResource from a dict
scanned_resource_from_dict = ScannedResource.from_dict(scanned_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


