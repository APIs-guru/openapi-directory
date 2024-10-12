# EndpointHealthData

The health data for an endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **str** | Id of the endpoint | [optional] 
**health_status** | **str** | The health status code of the endpoint | [optional] 

## Example

```python
from openapi_client.models.endpoint_health_data import EndpointHealthData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHealthData from a JSON string
endpoint_health_data_instance = EndpointHealthData.from_json(json)
# print the JSON string representation of the object
print(EndpointHealthData.to_json())

# convert the object into a dict
endpoint_health_data_dict = endpoint_health_data_instance.to_dict()
# create an instance of EndpointHealthData from a dict
endpoint_health_data_from_dict = EndpointHealthData.from_dict(endpoint_health_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


