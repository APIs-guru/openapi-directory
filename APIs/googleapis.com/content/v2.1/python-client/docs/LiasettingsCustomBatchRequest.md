# LiasettingsCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[LiasettingsCustomBatchRequestEntry]**](LiasettingsCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.liasettings_custom_batch_request import LiasettingsCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsCustomBatchRequest from a JSON string
liasettings_custom_batch_request_instance = LiasettingsCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(LiasettingsCustomBatchRequest.to_json())

# convert the object into a dict
liasettings_custom_batch_request_dict = liasettings_custom_batch_request_instance.to_dict()
# create an instance of LiasettingsCustomBatchRequest from a dict
liasettings_custom_batch_request_from_dict = LiasettingsCustomBatchRequest.from_dict(liasettings_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


