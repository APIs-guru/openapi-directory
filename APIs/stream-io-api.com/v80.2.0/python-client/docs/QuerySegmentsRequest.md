# QuerySegmentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_conditions** | **Dict[str, object]** |  | 
**limit** | **int** |  | [optional] 
**sort** | [**CampaignSort**](CampaignSort.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_segments_request import QuerySegmentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySegmentsRequest from a JSON string
query_segments_request_instance = QuerySegmentsRequest.from_json(json)
# print the JSON string representation of the object
print(QuerySegmentsRequest.to_json())

# convert the object into a dict
query_segments_request_dict = query_segments_request_instance.to_dict()
# create an instance of QuerySegmentsRequest from a dict
query_segments_request_from_dict = QuerySegmentsRequest.from_dict(query_segments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


