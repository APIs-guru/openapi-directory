# ApplicationDeltaHealthPolicy

Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_service_type_delta_health_policy** | [**ServiceTypeDeltaHealthPolicy**](ServiceTypeDeltaHealthPolicy.md) |  | [optional] 
**service_type_delta_health_policies** | [**Dict[str, ServiceTypeDeltaHealthPolicy]**](ServiceTypeDeltaHealthPolicy.md) | Defines a map that contains specific delta health policies for different service types. Each entry specifies as key the service type name and as value a ServiceTypeDeltaHealthPolicy used to evaluate the service health when upgrading the cluster. The map is empty by default.  | [optional] 

## Example

```python
from openapi_client.models.application_delta_health_policy import ApplicationDeltaHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDeltaHealthPolicy from a JSON string
application_delta_health_policy_instance = ApplicationDeltaHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationDeltaHealthPolicy.to_json())

# convert the object into a dict
application_delta_health_policy_dict = application_delta_health_policy_instance.to_dict()
# create an instance of ApplicationDeltaHealthPolicy from a dict
application_delta_health_policy_from_dict = ApplicationDeltaHealthPolicy.from_dict(application_delta_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


