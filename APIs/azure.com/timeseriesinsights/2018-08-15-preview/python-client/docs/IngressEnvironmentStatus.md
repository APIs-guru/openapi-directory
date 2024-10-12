# IngressEnvironmentStatus

An object that represents the status of ingress on an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | This string represents the state of ingress operations on an environment. It can be \&quot;Disabled\&quot;, \&quot;Ready\&quot;, \&quot;Running\&quot;, \&quot;Paused\&quot; or \&quot;Unknown\&quot; | [optional] 
**state_details** | [**EnvironmentStateDetails**](EnvironmentStateDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingress_environment_status import IngressEnvironmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of IngressEnvironmentStatus from a JSON string
ingress_environment_status_instance = IngressEnvironmentStatus.from_json(json)
# print the JSON string representation of the object
print(IngressEnvironmentStatus.to_json())

# convert the object into a dict
ingress_environment_status_dict = ingress_environment_status_instance.to_dict()
# create an instance of IngressEnvironmentStatus from a dict
ingress_environment_status_from_dict = IngressEnvironmentStatus.from_dict(ingress_environment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


