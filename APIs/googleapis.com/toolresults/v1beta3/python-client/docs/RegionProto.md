# RegionProto

A rectangular region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height_px** | **int** | The height, in pixels. Always set. | [optional] 
**left_px** | **int** | The left side of the rectangle, in pixels. Always set. | [optional] 
**top_px** | **int** | The top of the rectangle, in pixels. Always set. | [optional] 
**width_px** | **int** | The width, in pixels. Always set. | [optional] 

## Example

```python
from openapi_client.models.region_proto import RegionProto

# TODO update the JSON string below
json = "{}"
# create an instance of RegionProto from a JSON string
region_proto_instance = RegionProto.from_json(json)
# print the JSON string representation of the object
print(RegionProto.to_json())

# convert the object into a dict
region_proto_dict = region_proto_instance.to_dict()
# create an instance of RegionProto from a dict
region_proto_from_dict = RegionProto.from_dict(region_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


