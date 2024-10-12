# LatestNewsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**get_latest_news** | [**List[NewsItem]**](NewsItem.md) | Result of latest news list. | 

## Example

```python
from openapi_client.models.latest_news_response import LatestNewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LatestNewsResponse from a JSON string
latest_news_response_instance = LatestNewsResponse.from_json(json)
# print the JSON string representation of the object
print(LatestNewsResponse.to_json())

# convert the object into a dict
latest_news_response_dict = latest_news_response_instance.to_dict()
# create an instance of LatestNewsResponse from a dict
latest_news_response_from_dict = LatestNewsResponse.from_dict(latest_news_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


