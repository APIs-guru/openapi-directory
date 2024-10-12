# V2Descriptor

Docker V2 image layer descriptor including config and layers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | Layer digest | [optional] 
**media_type** | **str** | Layer media type | [optional] 
**size** | **int** | Layer size | [optional] 

## Example

```python
from openapi_client.models.v2_descriptor import V2Descriptor

# TODO update the JSON string below
json = "{}"
# create an instance of V2Descriptor from a JSON string
v2_descriptor_instance = V2Descriptor.from_json(json)
# print the JSON string representation of the object
print(V2Descriptor.to_json())

# convert the object into a dict
v2_descriptor_dict = v2_descriptor_instance.to_dict()
# create an instance of V2Descriptor from a dict
v2_descriptor_from_dict = V2Descriptor.from_dict(v2_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


