# Service

A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_customer_metadata** | **Dict[str, object]** | Additional Google Generated Customer Metadata, this field won&#39;t be provided by default and can be requested by setting the IncludeExtraData field in GetServiceRequest | [optional] 
**id** | **str** | Relative name of the service within the application. Example: default.@OutputOnly | [optional] 
**labels** | **Dict[str, str]** | A set of labels to apply to this service. Labels are key/value pairs that describe the service and all resources that belong to it (e.g., versions). The labels can be used to search and group resources, and are propagated to the usage and billing reports, enabling fine-grain analysis of costs. An example of using labels is to tag resources belonging to different environments (e.g., \&quot;env&#x3D;prod\&quot;, \&quot;env&#x3D;qa\&quot;). Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters. Label keys must start with a lowercase letter or an international character. Each service can have at most 32 labels. | [optional] 
**name** | **str** | Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly | [optional] 
**network_settings** | [**NetworkSettings**](NetworkSettings.md) |  | [optional] 
**split** | [**TrafficSplit**](TrafficSplit.md) |  | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


