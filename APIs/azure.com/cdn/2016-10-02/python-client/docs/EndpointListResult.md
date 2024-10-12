# EndpointListResult

Result of the request to list endpoints. It contains a list of endpoint objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of endpoint objects if there are any. | [optional] 
**value** | [**List[Endpoint]**](Endpoint.md) | List of CDN endpoints within a profile | [optional] 

## Example

```python
from openapi_client.models.endpoint_list_result import EndpointListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointListResult from a JSON string
endpoint_list_result_instance = EndpointListResult.from_json(json)
# print the JSON string representation of the object
print(EndpointListResult.to_json())

# convert the object into a dict
endpoint_list_result_dict = endpoint_list_result_instance.to_dict()
# create an instance of EndpointListResult from a dict
endpoint_list_result_from_dict = EndpointListResult.from_dict(endpoint_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


