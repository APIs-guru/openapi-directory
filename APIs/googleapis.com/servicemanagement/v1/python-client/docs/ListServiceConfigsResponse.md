# ListServiceConfigsResponse

Response message for ListServiceConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token of the next page of results. | [optional] 
**service_configs** | [**List[Service]**](Service.md) | The list of service configuration resources. | [optional] 

## Example

```python
from openapi_client.models.list_service_configs_response import ListServiceConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceConfigsResponse from a JSON string
list_service_configs_response_instance = ListServiceConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceConfigsResponse.to_json())

# convert the object into a dict
list_service_configs_response_dict = list_service_configs_response_instance.to_dict()
# create an instance of ListServiceConfigsResponse from a dict
list_service_configs_response_from_dict = ListServiceConfigsResponse.from_dict(list_service_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


