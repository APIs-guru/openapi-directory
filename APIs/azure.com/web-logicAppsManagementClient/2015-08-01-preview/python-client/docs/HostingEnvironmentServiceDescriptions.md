# HostingEnvironmentServiceDescriptions

Back end service per ASE

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_id** | **str** | Host Id | [optional] 
**hosting_environment_id** | **str** | Hosting environment Id | [optional] 
**service_url** | **str** | service url to use | [optional] 
**use_internal_routing** | **bool** | When the backend url is in same ASE, for performance reason this flag can be set to true              If WebApp.DisableHostNames is also set it improves the security by making the back end accessible only               via API calls              Note: calls will fail if this option is used but back end is not on the same ASE | [optional] 

## Example

```python
from openapi_client.models.hosting_environment_service_descriptions import HostingEnvironmentServiceDescriptions

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironmentServiceDescriptions from a JSON string
hosting_environment_service_descriptions_instance = HostingEnvironmentServiceDescriptions.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironmentServiceDescriptions.to_json())

# convert the object into a dict
hosting_environment_service_descriptions_dict = hosting_environment_service_descriptions_instance.to_dict()
# create an instance of HostingEnvironmentServiceDescriptions from a dict
hosting_environment_service_descriptions_from_dict = HostingEnvironmentServiceDescriptions.from_dict(hosting_environment_service_descriptions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


