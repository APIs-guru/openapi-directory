# DatafeedsCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[DatafeedsCustomBatchResponseEntry]**](DatafeedsCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#datafeedsCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.datafeeds_custom_batch_response import DatafeedsCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedsCustomBatchResponse from a JSON string
datafeeds_custom_batch_response_instance = DatafeedsCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(DatafeedsCustomBatchResponse.to_json())

# convert the object into a dict
datafeeds_custom_batch_response_dict = datafeeds_custom_batch_response_instance.to_dict()
# create an instance of DatafeedsCustomBatchResponse from a dict
datafeeds_custom_batch_response_from_dict = DatafeedsCustomBatchResponse.from_dict(datafeeds_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


