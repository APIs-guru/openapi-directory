# ListConfigsResponse

`ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[RuntimeConfig]**](RuntimeConfig.md) | A list of the configurations in the project. The order of returned objects is arbitrary; that is, it is not ordered in any particular way. | [optional] 
**next_page_token** | **str** | This token allows you to get the next page of results for list requests. If the number of results is larger than &#x60;pageSize&#x60;, use the &#x60;nextPageToken&#x60; as a value for the query parameter &#x60;pageToken&#x60; in the next list request. Subsequent list requests will have their own &#x60;nextPageToken&#x60; to continue paging through the results | [optional] 

## Example

```python
from openapi_client.models.list_configs_response import ListConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConfigsResponse from a JSON string
list_configs_response_instance = ListConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConfigsResponse.to_json())

# convert the object into a dict
list_configs_response_dict = list_configs_response_instance.to_dict()
# create an instance of ListConfigsResponse from a dict
list_configs_response_from_dict = ListConfigsResponse.from_dict(list_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


