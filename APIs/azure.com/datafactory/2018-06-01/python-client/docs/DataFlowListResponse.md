# DataFlowListResponse

A list of data flow resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[DataFlowResource]**](DataFlowResource.md) | List of data flows. | 

## Example

```python
from openapi_client.models.data_flow_list_response import DataFlowListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowListResponse from a JSON string
data_flow_list_response_instance = DataFlowListResponse.from_json(json)
# print the JSON string representation of the object
print(DataFlowListResponse.to_json())

# convert the object into a dict
data_flow_list_response_dict = data_flow_list_response_instance.to_dict()
# create an instance of DataFlowListResponse from a dict
data_flow_list_response_from_dict = DataFlowListResponse.from_dict(data_flow_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


