# ServiceTypeDeltaHealthPolicy

Service health policy 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_delta_unhealthy_services** | **int** | Maximum percentage of unhealthy services in cluster | [optional] 

## Example

```python
from openapi_client.models.service_type_delta_health_policy import ServiceTypeDeltaHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeDeltaHealthPolicy from a JSON string
service_type_delta_health_policy_instance = ServiceTypeDeltaHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeDeltaHealthPolicy.to_json())

# convert the object into a dict
service_type_delta_health_policy_dict = service_type_delta_health_policy_instance.to_dict()
# create an instance of ServiceTypeDeltaHealthPolicy from a dict
service_type_delta_health_policy_from_dict = ServiceTypeDeltaHealthPolicy.from_dict(service_type_delta_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


