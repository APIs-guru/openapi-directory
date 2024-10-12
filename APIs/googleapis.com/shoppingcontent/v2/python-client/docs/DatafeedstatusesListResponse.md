# DatafeedstatusesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#datafeedstatusesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of datafeed statuses. | [optional] 
**resources** | [**List[DatafeedStatus]**](DatafeedStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.datafeedstatuses_list_response import DatafeedstatusesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedstatusesListResponse from a JSON string
datafeedstatuses_list_response_instance = DatafeedstatusesListResponse.from_json(json)
# print the JSON string representation of the object
print(DatafeedstatusesListResponse.to_json())

# convert the object into a dict
datafeedstatuses_list_response_dict = datafeedstatuses_list_response_instance.to_dict()
# create an instance of DatafeedstatusesListResponse from a dict
datafeedstatuses_list_response_from_dict = DatafeedstatusesListResponse.from_dict(datafeedstatuses_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


