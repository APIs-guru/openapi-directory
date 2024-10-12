# DatafeedsFetchNowResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#datafeedsFetchNowResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.datafeeds_fetch_now_response import DatafeedsFetchNowResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedsFetchNowResponse from a JSON string
datafeeds_fetch_now_response_instance = DatafeedsFetchNowResponse.from_json(json)
# print the JSON string representation of the object
print(DatafeedsFetchNowResponse.to_json())

# convert the object into a dict
datafeeds_fetch_now_response_dict = datafeeds_fetch_now_response_instance.to_dict()
# create an instance of DatafeedsFetchNowResponse from a dict
datafeeds_fetch_now_response_from_dict = DatafeedsFetchNowResponse.from_dict(datafeeds_fetch_now_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


