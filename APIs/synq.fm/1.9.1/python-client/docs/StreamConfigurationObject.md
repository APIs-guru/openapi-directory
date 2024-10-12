# StreamConfigurationObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rtmp_host** | **str** |  | [optional] 
**rtmp_key** | **str** |  | [optional] 
**rtmp_port** | **str** |  | [optional] 
**rtmp_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_configuration_object import StreamConfigurationObject

# TODO update the JSON string below
json = "{}"
# create an instance of StreamConfigurationObject from a JSON string
stream_configuration_object_instance = StreamConfigurationObject.from_json(json)
# print the JSON string representation of the object
print(StreamConfigurationObject.to_json())

# convert the object into a dict
stream_configuration_object_dict = stream_configuration_object_instance.to_dict()
# create an instance of StreamConfigurationObject from a dict
stream_configuration_object_from_dict = StreamConfigurationObject.from_dict(stream_configuration_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


