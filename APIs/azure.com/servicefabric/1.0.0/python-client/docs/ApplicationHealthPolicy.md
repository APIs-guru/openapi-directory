# ApplicationHealthPolicy

The policy of the application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consider_warning_as_error** | **bool** |  | [optional] 
**default_service_type_health_policy** | [**ApplicationHealthPolicyDefaultServiceTypeHealthPolicy**](ApplicationHealthPolicyDefaultServiceTypeHealthPolicy.md) |  | [optional] 
**max_percent_unhealthy_deployed_applications** | **int** |  | [optional] 

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


