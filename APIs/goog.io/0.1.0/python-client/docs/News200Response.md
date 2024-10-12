# News200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[News200ResponseEntriesInner]**](News200ResponseEntriesInner.md) |  | [optional] 
**feed** | [**News200ResponseFeed**](News200ResponseFeed.md) |  | [optional] 

## Example

```python
from openapi_client.models.news200_response import News200Response

# TODO update the JSON string below
json = "{}"
# create an instance of News200Response from a JSON string
news200_response_instance = News200Response.from_json(json)
# print the JSON string representation of the object
print(News200Response.to_json())

# convert the object into a dict
news200_response_dict = news200_response_instance.to_dict()
# create an instance of News200Response from a dict
news200_response_from_dict = News200Response.from_dict(news200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


