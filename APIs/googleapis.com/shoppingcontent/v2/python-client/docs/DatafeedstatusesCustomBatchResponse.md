# DatafeedstatusesCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[DatafeedstatusesCustomBatchResponseEntry]**](DatafeedstatusesCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#datafeedstatusesCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.datafeedstatuses_custom_batch_response import DatafeedstatusesCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedstatusesCustomBatchResponse from a JSON string
datafeedstatuses_custom_batch_response_instance = DatafeedstatusesCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(DatafeedstatusesCustomBatchResponse.to_json())

# convert the object into a dict
datafeedstatuses_custom_batch_response_dict = datafeedstatuses_custom_batch_response_instance.to_dict()
# create an instance of DatafeedstatusesCustomBatchResponse from a dict
datafeedstatuses_custom_batch_response_from_dict = DatafeedstatusesCustomBatchResponse.from_dict(datafeedstatuses_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


