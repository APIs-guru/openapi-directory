# ApplicationHealthPolicies

Defines the application health policy map used to evaluate the health of an application or one of its children entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**List[ApplicationHealthPolicyMapItem]**](ApplicationHealthPolicyMapItem.md) | Defines a map that contains specific application health policies for different applications. Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health. If an application is not specified in the map, the application health evaluation uses the ApplicationHealthPolicy found in its application manifest or the default application health policy (if no health policy is defined in the manifest). The map is empty by default. | [optional] 

## Example

```python
from openapi_client.models.application_health_policies import ApplicationHealthPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthPolicies from a JSON string
application_health_policies_instance = ApplicationHealthPolicies.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthPolicies.to_json())

# convert the object into a dict
application_health_policies_dict = application_health_policies_instance.to_dict()
# create an instance of ApplicationHealthPolicies from a dict
application_health_policies_from_dict = ApplicationHealthPolicies.from_dict(application_health_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


