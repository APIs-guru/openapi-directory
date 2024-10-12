# Container

Represents a Google Tag Manager Container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | The Container ID uniquely identifies the GTM Container. | [optional] 
**domain_name** | **List[str]** | Optional list of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**enabled_built_in_variable** | **List[str]** | List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. | [optional] 
**name** | **str** | Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**notes** | **str** | Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**public_id** | **str** | Container Public ID. | [optional] 
**time_zone_country_id** | **str** | Container Country ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**time_zone_id** | **str** | Container Time Zone ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**usage_context** | **List[str]** | List of Usage Contexts for the Container. Valid values include: web, android, ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 

## Example

```python
from openapi_client.models.container import Container

# TODO update the JSON string below
json = "{}"
# create an instance of Container from a JSON string
container_instance = Container.from_json(json)
# print the JSON string representation of the object
print(Container.to_json())

# convert the object into a dict
container_dict = container_instance.to_dict()
# create an instance of Container from a dict
container_from_dict = Container.from_dict(container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


