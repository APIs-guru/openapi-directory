# LiasettingsCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[LiasettingsCustomBatchResponseEntry]**](LiasettingsCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#liasettingsCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.liasettings_custom_batch_response import LiasettingsCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsCustomBatchResponse from a JSON string
liasettings_custom_batch_response_instance = LiasettingsCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(LiasettingsCustomBatchResponse.to_json())

# convert the object into a dict
liasettings_custom_batch_response_dict = liasettings_custom_batch_response_instance.to_dict()
# create an instance of LiasettingsCustomBatchResponse from a dict
liasettings_custom_batch_response_from_dict = LiasettingsCustomBatchResponse.from_dict(liasettings_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


