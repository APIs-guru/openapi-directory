# UserDefinedResourcesProperties

Properties of the solution's user defined resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Azure Resource Graph query which represents the security solution&#39;s user defined resources. Required to start with \&quot;where type !&#x3D; \&quot;Microsoft.Devices/IotHubs\&quot;\&quot; | 
**query_subscriptions** | **List[str]** | List of Azure subscription ids on which the user defined resources query should be executed. | 

## Example

```python
from openapi_client.models.user_defined_resources_properties import UserDefinedResourcesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserDefinedResourcesProperties from a JSON string
user_defined_resources_properties_instance = UserDefinedResourcesProperties.from_json(json)
# print the JSON string representation of the object
print(UserDefinedResourcesProperties.to_json())

# convert the object into a dict
user_defined_resources_properties_dict = user_defined_resources_properties_instance.to_dict()
# create an instance of UserDefinedResourcesProperties from a dict
user_defined_resources_properties_from_dict = UserDefinedResourcesProperties.from_dict(user_defined_resources_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


