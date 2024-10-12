# AppServicePlansListHybridConnectionKeys200ResponseProperties

HybridConnectionKey resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_key_name** | **str** | The name of the send key. | [optional] [readonly] 
**send_key_value** | **str** | The value of the send key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_list_hybrid_connection_keys200_response_properties import AppServicePlansListHybridConnectionKeys200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListHybridConnectionKeys200ResponseProperties from a JSON string
app_service_plans_list_hybrid_connection_keys200_response_properties_instance = AppServicePlansListHybridConnectionKeys200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListHybridConnectionKeys200ResponseProperties.to_json())

# convert the object into a dict
app_service_plans_list_hybrid_connection_keys200_response_properties_dict = app_service_plans_list_hybrid_connection_keys200_response_properties_instance.to_dict()
# create an instance of AppServicePlansListHybridConnectionKeys200ResponseProperties from a dict
app_service_plans_list_hybrid_connection_keys200_response_properties_from_dict = AppServicePlansListHybridConnectionKeys200ResponseProperties.from_dict(app_service_plans_list_hybrid_connection_keys200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


