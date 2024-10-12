# UrlsAggs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UrlsAgg**](UrlsAgg.md) |  | [optional] 
**error** | [**UrlsErrorAgg**](UrlsErrorAgg.md) |  | [optional] 
**status** | **int** |  | 

## Example

```python
from openapi_client.models.urls_aggs import UrlsAggs

# TODO update the JSON string below
json = "{}"
# create an instance of UrlsAggs from a JSON string
urls_aggs_instance = UrlsAggs.from_json(json)
# print the JSON string representation of the object
print(UrlsAggs.to_json())

# convert the object into a dict
urls_aggs_dict = urls_aggs_instance.to_dict()
# create an instance of UrlsAggs from a dict
urls_aggs_from_dict = UrlsAggs.from_dict(urls_aggs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


