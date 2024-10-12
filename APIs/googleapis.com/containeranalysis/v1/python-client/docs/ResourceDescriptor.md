# ResourceDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, object]** |  | [optional] 
**content** | **bytearray** |  | [optional] 
**digest** | **Dict[str, str]** |  | [optional] 
**download_location** | **str** |  | [optional] 
**media_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.resource_descriptor import ResourceDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceDescriptor from a JSON string
resource_descriptor_instance = ResourceDescriptor.from_json(json)
# print the JSON string representation of the object
print(ResourceDescriptor.to_json())

# convert the object into a dict
resource_descriptor_dict = resource_descriptor_instance.to_dict()
# create an instance of ResourceDescriptor from a dict
resource_descriptor_from_dict = ResourceDescriptor.from_dict(resource_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


