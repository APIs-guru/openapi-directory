# UsageNetworkStreamSources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_sources** | [**List[UsageNetworkStreamSource]**](UsageNetworkStreamSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.usage_network_stream_sources import UsageNetworkStreamSources

# TODO update the JSON string below
json = "{}"
# create an instance of UsageNetworkStreamSources from a JSON string
usage_network_stream_sources_instance = UsageNetworkStreamSources.from_json(json)
# print the JSON string representation of the object
print(UsageNetworkStreamSources.to_json())

# convert the object into a dict
usage_network_stream_sources_dict = usage_network_stream_sources_instance.to_dict()
# create an instance of UsageNetworkStreamSources from a dict
usage_network_stream_sources_from_dict = UsageNetworkStreamSources.from_dict(usage_network_stream_sources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


