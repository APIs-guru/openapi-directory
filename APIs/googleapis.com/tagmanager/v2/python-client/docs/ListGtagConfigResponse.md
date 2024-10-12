# ListGtagConfigResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gtag_config** | [**List[GtagConfig]**](GtagConfig.md) | All Google tag configs in a Container. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_gtag_config_response import ListGtagConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGtagConfigResponse from a JSON string
list_gtag_config_response_instance = ListGtagConfigResponse.from_json(json)
# print the JSON string representation of the object
print(ListGtagConfigResponse.to_json())

# convert the object into a dict
list_gtag_config_response_dict = list_gtag_config_response_instance.to_dict()
# create an instance of ListGtagConfigResponse from a dict
list_gtag_config_response_from_dict = ListGtagConfigResponse.from_dict(list_gtag_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


