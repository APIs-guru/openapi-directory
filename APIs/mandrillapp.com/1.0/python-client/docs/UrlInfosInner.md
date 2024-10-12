# UrlInfosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.url_infos_inner import UrlInfosInner

# TODO update the JSON string below
json = "{}"
# create an instance of UrlInfosInner from a JSON string
url_infos_inner_instance = UrlInfosInner.from_json(json)
# print the JSON string representation of the object
print(UrlInfosInner.to_json())

# convert the object into a dict
url_infos_inner_dict = url_infos_inner_instance.to_dict()
# create an instance of UrlInfosInner from a dict
url_infos_inner_from_dict = UrlInfosInner.from_dict(url_infos_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


