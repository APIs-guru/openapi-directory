# DatafeedsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#datafeedsListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of datafeeds. | [optional] 
**resources** | [**List[Datafeed]**](Datafeed.md) |  | [optional] 

## Example

```python
from openapi_client.models.datafeeds_list_response import DatafeedsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedsListResponse from a JSON string
datafeeds_list_response_instance = DatafeedsListResponse.from_json(json)
# print the JSON string representation of the object
print(DatafeedsListResponse.to_json())

# convert the object into a dict
datafeeds_list_response_dict = datafeeds_list_response_instance.to_dict()
# create an instance of DatafeedsListResponse from a dict
datafeeds_list_response_from_dict = DatafeedsListResponse.from_dict(datafeeds_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


