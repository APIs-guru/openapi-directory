# EndpointServicesListResult

Response for the ListAvailableEndpointServices API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[EndpointServiceResult]**](EndpointServiceResult.md) | List of available endpoint services in a region. | [optional] 

## Example

```python
from openapi_client.models.endpoint_services_list_result import EndpointServicesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointServicesListResult from a JSON string
endpoint_services_list_result_instance = EndpointServicesListResult.from_json(json)
# print the JSON string representation of the object
print(EndpointServicesListResult.to_json())

# convert the object into a dict
endpoint_services_list_result_dict = endpoint_services_list_result_instance.to_dict()
# create an instance of EndpointServicesListResult from a dict
endpoint_services_list_result_from_dict = EndpointServicesListResult.from_dict(endpoint_services_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


