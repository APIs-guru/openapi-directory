# HostName

Details of a hostname derived from a domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_resource_name** | **str** | Name of the Azure resource the hostname is assigned to. If it is assigned to a traffic manager then it will be the traffic manager name otherwise it will be the website name | [optional] 
**azure_resource_type** | **str** | Type of the Azure resource the hostname is assigned to | [optional] 
**custom_host_name_dns_record_type** | **str** | Type of the Dns record | [optional] 
**host_name_type** | **str** | Type of the hostname | [optional] 
**name** | **str** | Name of the hostname | [optional] 
**site_names** | **List[str]** | List of sites the hostname is assigned to. This list will have more than one site only if the hostname is pointing to a Traffic Manager | [optional] 

## Example

```python
from openapi_client.models.host_name import HostName

# TODO update the JSON string below
json = "{}"
# create an instance of HostName from a JSON string
host_name_instance = HostName.from_json(json)
# print the JSON string representation of the object
print(HostName.to_json())

# convert the object into a dict
host_name_dict = host_name_instance.to_dict()
# create an instance of HostName from a dict
host_name_from_dict = HostName.from_dict(host_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


