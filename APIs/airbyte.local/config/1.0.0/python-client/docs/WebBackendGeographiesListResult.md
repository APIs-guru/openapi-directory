# WebBackendGeographiesListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geographies** | [**List[Geography]**](Geography.md) |  | 

## Example

```python
from openapi_client.models.web_backend_geographies_list_result import WebBackendGeographiesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendGeographiesListResult from a JSON string
web_backend_geographies_list_result_instance = WebBackendGeographiesListResult.from_json(json)
# print the JSON string representation of the object
print(WebBackendGeographiesListResult.to_json())

# convert the object into a dict
web_backend_geographies_list_result_dict = web_backend_geographies_list_result_instance.to_dict()
# create an instance of WebBackendGeographiesListResult from a dict
web_backend_geographies_list_result_from_dict = WebBackendGeographiesListResult.from_dict(web_backend_geographies_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


