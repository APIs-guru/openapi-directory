# WebAppsListHybridConnectionKeys200ResponseProperties

HybridConnectionKey resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_key_name** | **str** | The name of the send key. | [optional] [readonly] 
**send_key_value** | **str** | The value of the send key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_hybrid_connection_keys200_response_properties import WebAppsListHybridConnectionKeys200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListHybridConnectionKeys200ResponseProperties from a JSON string
web_apps_list_hybrid_connection_keys200_response_properties_instance = WebAppsListHybridConnectionKeys200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsListHybridConnectionKeys200ResponseProperties.to_json())

# convert the object into a dict
web_apps_list_hybrid_connection_keys200_response_properties_dict = web_apps_list_hybrid_connection_keys200_response_properties_instance.to_dict()
# create an instance of WebAppsListHybridConnectionKeys200ResponseProperties from a dict
web_apps_list_hybrid_connection_keys200_response_properties_from_dict = WebAppsListHybridConnectionKeys200ResponseProperties.from_dict(web_apps_list_hybrid_connection_keys200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


