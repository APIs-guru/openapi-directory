# Tag

Represents a Google Tag Manager Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**blocking_rule_id** | **List[str]** | Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**blocking_trigger_id** | **List[str]** | Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**consent_settings** | [**TagConsentSetting**](TagConsentSetting.md) |  | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. | [optional] 
**firing_rule_id** | **List[str]** | Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**firing_trigger_id** | **List[str]** | Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**live_only** | **bool** | If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**monitoring_metadata** | [**Parameter**](Parameter.md) |  | [optional] 
**monitoring_metadata_tag_name_key** | **str** | If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**name** | **str** | Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**notes** | **str** | User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | The tag&#39;s parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**parent_folder_id** | **str** | Parent folder id. | [optional] 
**path** | **str** | GTM Tag&#39;s API relative path. | [optional] 
**paused** | **bool** | Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**priority** | [**Parameter**](Parameter.md) |  | [optional] 
**schedule_end_ms** | **str** | The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**schedule_start_ms** | **str** | The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**setup_tag** | [**List[SetupTag]**](SetupTag.md) | The list of setup tags. Currently we only allow one. | [optional] 
**tag_firing_option** | **str** | Option to fire this tag. | [optional] 
**tag_id** | **str** | The Tag ID uniquely identifies the GTM Tag. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**teardown_tag** | [**List[TeardownTag]**](TeardownTag.md) | The list of teardown tags. Currently we only allow one. | [optional] 
**type** | **str** | GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.tag import Tag

# TODO update the JSON string below
json = "{}"
# create an instance of Tag from a JSON string
tag_instance = Tag.from_json(json)
# print the JSON string representation of the object
print(Tag.to_json())

# convert the object into a dict
tag_dict = tag_instance.to_dict()
# create an instance of Tag from a dict
tag_from_dict = Tag.from_dict(tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


