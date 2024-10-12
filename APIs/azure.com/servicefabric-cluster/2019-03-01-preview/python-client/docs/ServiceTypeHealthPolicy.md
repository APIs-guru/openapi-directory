# ServiceTypeHealthPolicy

Represents the health policy used to evaluate the health of services belonging to a service type. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_services** | **int** | The maximum percentage of services allowed to be unhealthy before your application is considered in error.  | [optional] 

## Example

```python
from openapi_client.models.service_type_health_policy import ServiceTypeHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeHealthPolicy from a JSON string
service_type_health_policy_instance = ServiceTypeHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeHealthPolicy.to_json())

# convert the object into a dict
service_type_health_policy_dict = service_type_health_policy_instance.to_dict()
# create an instance of ServiceTypeHealthPolicy from a dict
service_type_health_policy_from_dict = ServiceTypeHealthPolicy.from_dict(service_type_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


