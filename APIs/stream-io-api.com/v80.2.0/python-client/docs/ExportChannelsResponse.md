# ExportChannelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.export_channels_response import ExportChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportChannelsResponse from a JSON string
export_channels_response_instance = ExportChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ExportChannelsResponse.to_json())

# convert the object into a dict
export_channels_response_dict = export_channels_response_instance.to_dict()
# create an instance of ExportChannelsResponse from a dict
export_channels_response_from_dict = ExportChannelsResponse.from_dict(export_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


