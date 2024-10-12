# StreamTargetProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[StreamTargetProperty]**](StreamTargetProperty.md) |  | 

## Example

```python
from openapi_client.models.stream_target_properties import StreamTargetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetProperties from a JSON string
stream_target_properties_instance = StreamTargetProperties.from_json(json)
# print the JSON string representation of the object
print(StreamTargetProperties.to_json())

# convert the object into a dict
stream_target_properties_dict = stream_target_properties_instance.to_dict()
# create an instance of StreamTargetProperties from a dict
stream_target_properties_from_dict = StreamTargetProperties.from_dict(stream_target_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


