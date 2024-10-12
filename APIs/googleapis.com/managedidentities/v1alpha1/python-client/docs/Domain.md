# Domain

If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_logs_enabled** | **bool** | Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled. | [optional] 
**authorized_networks** | **List[str]** | Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Network can be added using UpdateDomain later. Domain is only available on network part of authorized_networks. Caller needs to make sure that CIDR subnets do not overlap between networks, else domain creation will fail. | [optional] 
**create_time** | **str** | Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide | [optional] 
**fqdn** | **str** | Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user provided metadata | [optional] 
**locations** | **List[str]** | Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block. | [optional] 
**managed_identities_admin_name** | **str** | Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified &#x60;setupadmin&#x60; would be used. | [optional] 
**name** | **str** | Output only. Unique name of the domain in this scope including projects and location using the form: &#x60;projects/{project_id}/locations/global/domains/{domain_name}&#x60;. | [optional] 
**reserved_ip_range** | **str** | Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks]. | [optional] 
**state** | **str** | Output only. The current state of this domain. | [optional] 
**status_message** | **str** | Output only. Additional information about the current status of this domain, if available. | [optional] 
**trusts** | [**List[Trust]**](Trust.md) | Output only. The current trusts associated with the domain. | [optional] 
**update_time** | **str** | Output only. Last update time. Synthetic field is populated automatically by CCFE. | [optional] 

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


