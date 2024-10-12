# SecurityBulletinEvent

SecurityBulletinEvent is a notification sent to customers when a security bulletin has been posted that they are vulnerable to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_supported_minors** | **List[str]** | The GKE minor versions affected by this vulnerability. | [optional] 
**brief_description** | **str** | A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description. | [optional] 
**bulletin_id** | **str** | The ID of the bulletin corresponding to the vulnerability. | [optional] 
**bulletin_uri** | **str** | The URI link to the bulletin on the website for more information. | [optional] 
**cve_ids** | **List[str]** | The CVEs associated with this bulletin. | [optional] 
**manual_steps_required** | **bool** | If this field is specified, it means there are manual steps that the user must take to make their clusters safe. | [optional] 
**patched_versions** | **List[str]** | The GKE versions where this vulnerability is patched. | [optional] 
**resource_type_affected** | **str** | The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects &gt; 1 resource type. | [optional] 
**severity** | **str** | The severity of this bulletin as it relates to GKE. | [optional] 
**suggested_upgrade_target** | **str** | This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster&#39;s location. | [optional] 

## Example

```python
from openapi_client.models.security_bulletin_event import SecurityBulletinEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityBulletinEvent from a JSON string
security_bulletin_event_instance = SecurityBulletinEvent.from_json(json)
# print the JSON string representation of the object
print(SecurityBulletinEvent.to_json())

# convert the object into a dict
security_bulletin_event_dict = security_bulletin_event_instance.to_dict()
# create an instance of SecurityBulletinEvent from a dict
security_bulletin_event_from_dict = SecurityBulletinEvent.from_dict(security_bulletin_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


