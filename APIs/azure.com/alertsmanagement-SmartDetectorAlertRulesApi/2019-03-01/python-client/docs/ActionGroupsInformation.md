# ActionGroupsInformation

The Action Groups information, used by the alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_email_subject** | **str** | An optional custom email subject to use in email notifications. | [optional] 
**custom_webhook_payload** | **str** | An optional custom web-hook payload to use in web-hook notifications. | [optional] 
**group_ids** | **List[str]** | The Action Group resource IDs. | 

## Example

```python
from openapi_client.models.action_groups_information import ActionGroupsInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroupsInformation from a JSON string
action_groups_information_instance = ActionGroupsInformation.from_json(json)
# print the JSON string representation of the object
print(ActionGroupsInformation.to_json())

# convert the object into a dict
action_groups_information_dict = action_groups_information_instance.to_dict()
# create an instance of ActionGroupsInformation from a dict
action_groups_information_from_dict = ActionGroupsInformation.from_dict(action_groups_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


