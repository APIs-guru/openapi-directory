# DomainMapping

A domain serving an App Engine application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Relative name of the domain serving the application. Example: example.com. | [optional] 
**name** | **str** | Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly | [optional] 
**resource_records** | [**List[ResourceRecord]**](ResourceRecord.md) | The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping.@OutputOnly | [optional] 
**ssl_settings** | [**SslSettings**](SslSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_mapping import DomainMapping

# TODO update the JSON string below
json = "{}"
# create an instance of DomainMapping from a JSON string
domain_mapping_instance = DomainMapping.from_json(json)
# print the JSON string representation of the object
print(DomainMapping.to_json())

# convert the object into a dict
domain_mapping_dict = domain_mapping_instance.to_dict()
# create an instance of DomainMapping from a dict
domain_mapping_from_dict = DomainMapping.from_dict(domain_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


