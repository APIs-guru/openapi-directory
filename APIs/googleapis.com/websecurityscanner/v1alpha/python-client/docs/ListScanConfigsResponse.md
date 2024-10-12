# ListScanConfigsResponse

Response for the `ListScanConfigs` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**scan_configs** | [**List[ScanConfig]**](ScanConfig.md) | The list of ScanConfigs returned. | [optional] 

## Example

```python
from openapi_client.models.list_scan_configs_response import ListScanConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScanConfigsResponse from a JSON string
list_scan_configs_response_instance = ListScanConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListScanConfigsResponse.to_json())

# convert the object into a dict
list_scan_configs_response_dict = list_scan_configs_response_instance.to_dict()
# create an instance of ListScanConfigsResponse from a dict
list_scan_configs_response_from_dict = ListScanConfigsResponse.from_dict(list_scan_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


