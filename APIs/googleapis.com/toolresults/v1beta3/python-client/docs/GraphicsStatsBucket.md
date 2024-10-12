# GraphicsStatsBucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frame_count** | **str** | Number of frames in the bucket. | [optional] 
**render_millis** | **str** | Lower bound of render time in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.graphics_stats_bucket import GraphicsStatsBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicsStatsBucket from a JSON string
graphics_stats_bucket_instance = GraphicsStatsBucket.from_json(json)
# print the JSON string representation of the object
print(GraphicsStatsBucket.to_json())

# convert the object into a dict
graphics_stats_bucket_dict = graphics_stats_bucket_instance.to_dict()
# create an instance of GraphicsStatsBucket from a dict
graphics_stats_bucket_from_dict = GraphicsStatsBucket.from_dict(graphics_stats_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


