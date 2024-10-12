# Domain

Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **str** | Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, &#x60;setupadmin&#x60; will be used. | [optional] 
**audit_logs_enabled** | **bool** | Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled. | [optional] 
**authorized_networks** | **List[str]** | Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in &#x60;authorized_networks&#x60;. If CIDR subnets overlap between networks, domain creation will fail. | [optional] 
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**fqdn** | **str** | Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Resource labels that can contain user-provided metadata. | [optional] 
**locations** | **List[str]** | Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block. | [optional] 
**name** | **str** | Output only. The unique name of the domain using the form: &#x60;projects/{project_id}/locations/global/domains/{domain_name}&#x60;. | [optional] [readonly] 
**reserved_ip_range** | **str** | Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks]. | [optional] 
**state** | **str** | Output only. The current state of this domain. | [optional] [readonly] 
**status_message** | **str** | Output only. Additional information about the current status of this domain, if available. | [optional] [readonly] 
**trusts** | [**List[Trust]**](Trust.md) | Output only. The current trusts associated with the domain. | [optional] [readonly] 
**update_time** | **str** | Output only. The last update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain import Domain

# TODO update the JSON string below
json = "{}"
# create an instance of Domain from a JSON string
domain_instance = Domain.from_json(json)
# print the JSON string representation of the object
print(Domain.to_json())

# convert the object into a dict
domain_dict = domain_instance.to_dict()
# create an instance of Domain from a dict
domain_from_dict = Domain.from_dict(domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


