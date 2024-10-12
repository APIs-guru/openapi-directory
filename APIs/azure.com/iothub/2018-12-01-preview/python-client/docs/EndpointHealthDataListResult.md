# EndpointHealthDataListResult

The JSON-serialized array of EndpointHealthData objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to more results | [optional] [readonly] 
**value** | [**List[EndpointHealthData]**](EndpointHealthData.md) | JSON-serialized array of Endpoint health data | [optional] 

## Example

```python
from openapi_client.models.endpoint_health_data_list_result import EndpointHealthDataListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHealthDataListResult from a JSON string
endpoint_health_data_list_result_instance = EndpointHealthDataListResult.from_json(json)
# print the JSON string representation of the object
print(EndpointHealthDataListResult.to_json())

# convert the object into a dict
endpoint_health_data_list_result_dict = endpoint_health_data_list_result_instance.to_dict()
# create an instance of EndpointHealthDataListResult from a dict
endpoint_health_data_list_result_from_dict = EndpointHealthDataListResult.from_dict(endpoint_health_data_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


