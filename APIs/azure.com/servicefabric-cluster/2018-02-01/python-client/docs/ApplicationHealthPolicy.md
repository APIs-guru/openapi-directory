# ApplicationHealthPolicy

Defines a health policy used to evaluate the health of an application or one of its children entities. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_service_type_health_policy** | [**ServiceTypeHealthPolicy**](ServiceTypeHealthPolicy.md) |  | [optional] 
**service_type_health_policies** | [**Dict[str, ServiceTypeHealthPolicy]**](ServiceTypeHealthPolicy.md) | Defines a ServiceTypeHealthPolicy per service type name.  The entries in the map replace the default service type health policy for each specified service type. For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently. With policy per service type, there&#39;s more granular control of the health of the service.  If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.  | [optional] 

## Example

```python
from openapi_client.models.application_health_policy import ApplicationHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthPolicy from a JSON string
application_health_policy_instance = ApplicationHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthPolicy.to_json())

# convert the object into a dict
application_health_policy_dict = application_health_policy_instance.to_dict()
# create an instance of ApplicationHealthPolicy from a dict
application_health_policy_from_dict = ApplicationHealthPolicy.from_dict(application_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


