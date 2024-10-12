# OriginListResult

Result of the request to list origins. It contains a list of origin objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of origin objects if there are any. | [optional] 
**value** | [**List[Origin]**](Origin.md) | List of CDN origins within an endpoint | [optional] 

## Example

```python
from openapi_client.models.origin_list_result import OriginListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OriginListResult from a JSON string
origin_list_result_instance = OriginListResult.from_json(json)
# print the JSON string representation of the object
print(OriginListResult.to_json())

# convert the object into a dict
origin_list_result_dict = origin_list_result_instance.to_dict()
# create an instance of OriginListResult from a dict
origin_list_result_from_dict = OriginListResult.from_dict(origin_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


