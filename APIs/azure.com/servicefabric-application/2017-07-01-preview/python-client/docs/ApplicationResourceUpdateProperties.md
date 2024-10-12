# ApplicationResourceUpdateProperties

The application resource properties for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_nodes** | **int** | The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node. | [optional] [default to 0]
**metrics** | [**List[ApplicationMetricDescription]**](ApplicationMetricDescription.md) | List of application capacity metric description. | [optional] 
**minimum_nodes** | **int** | The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property. | [optional] 
**parameters** | **Dict[str, str]** | List of application parameters with overridden values from their default values specified in the application manifest. | [optional] 
**remove_application_capacity** | **bool** | Remove the current application capacity settings. | [optional] 
**type_version** | **str** | The version of the application type as defined in the application manifest. | [optional] 
**upgrade_policy** | [**ApplicationUpgradePolicy**](ApplicationUpgradePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_resource_update_properties import ApplicationResourceUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceUpdateProperties from a JSON string
application_resource_update_properties_instance = ApplicationResourceUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceUpdateProperties.to_json())

# convert the object into a dict
application_resource_update_properties_dict = application_resource_update_properties_instance.to_dict()
# create an instance of ApplicationResourceUpdateProperties from a dict
application_resource_update_properties_from_dict = ApplicationResourceUpdateProperties.from_dict(application_resource_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


