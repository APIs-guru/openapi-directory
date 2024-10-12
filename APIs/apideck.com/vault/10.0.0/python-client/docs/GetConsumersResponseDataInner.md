# GetConsumersResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_request_count** | **float** |  | [optional] 
**application_id** | **str** |  | [optional] 
**consumer_id** | **str** |  | [optional] 
**created** | **str** |  | [optional] 
**metadata** | [**ConsumerMetadata**](ConsumerMetadata.md) |  | [optional] 
**modified** | **str** |  | [optional] 
**request_count_updated** | **str** |  | [optional] 
**request_counts** | [**RequestCountAllocation**](RequestCountAllocation.md) |  | [optional] 
**services** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.get_consumers_response_data_inner import GetConsumersResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetConsumersResponseDataInner from a JSON string
get_consumers_response_data_inner_instance = GetConsumersResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(GetConsumersResponseDataInner.to_json())

# convert the object into a dict
get_consumers_response_data_inner_dict = get_consumers_response_data_inner_instance.to_dict()
# create an instance of GetConsumersResponseDataInner from a dict
get_consumers_response_data_inner_from_dict = GetConsumersResponseDataInner.from_dict(get_consumers_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


