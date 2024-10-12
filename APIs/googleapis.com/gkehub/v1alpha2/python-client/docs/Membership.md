# Membership

Membership contains information about a member cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | [**Authority**](Authority.md) |  | [optional] 
**create_time** | **str** | Output only. When the Membership was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the Membership was deleted. | [optional] [readonly] 
**description** | **str** | Output only. Description of this membership, limited to 63 characters. Must match the regex: &#x60;a-zA-Z0-9*&#x60; This field is present for legacy purposes. | [optional] [readonly] 
**endpoint** | [**MembershipEndpoint**](MembershipEndpoint.md) |  | [optional] 
**external_id** | **str** | Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external_id is managed by the Hub API and updates will be ignored. The ID must match the regex: &#x60;a-zA-Z0-9*&#x60; If this Membership represents a Kubernetes cluster, this value should be set to the UID of the &#x60;kube-system&#x60; namespace object. | [optional] 
**infrastructure_type** | **str** | Optional. The infrastructure type this Membership is running on. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels for this membership. | [optional] 
**last_connection_time** | **str** | Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset. | [optional] [readonly] 
**monitoring_config** | [**MonitoringConfig**](MonitoringConfig.md) |  | [optional] 
**name** | **str** | Output only. The full, unique name of this Membership resource in the format &#x60;projects/*/locations/*/memberships/{membership_id}&#x60;, set during creation. &#x60;membership_id&#x60; must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or &#x60;-&#x60; 3. It must start and end with an alphanumeric character Which can be expressed as the regex: &#x60;[a-z0-9]([-a-z0-9]*[a-z0-9])?&#x60;, with a maximum length of 63 characters. | [optional] [readonly] 
**state** | [**MembershipState**](MembershipState.md) |  | [optional] 
**unique_id** | **str** | Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. | [optional] [readonly] 
**update_time** | **str** | Output only. When the Membership was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.membership import Membership

# TODO update the JSON string below
json = "{}"
# create an instance of Membership from a JSON string
membership_instance = Membership.from_json(json)
# print the JSON string representation of the object
print(Membership.to_json())

# convert the object into a dict
membership_dict = membership_instance.to_dict()
# create an instance of Membership from a dict
membership_from_dict = Membership.from_dict(membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


