# DirectoryChromeosdevicesIssueCommandRequest

A request for issuing a command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_type** | **str** | The type of command. | [optional] 
**payload** | **str** | The payload for the command, provide it only if command supports it. The following commands support adding payload: * &#x60;SET_VOLUME&#x60;: Payload is a stringified JSON object in the form: { \&quot;volume\&quot;: 50 }. The volume has to be an integer in the range [0,100]. * &#x60;DEVICE_START_CRD_SESSION&#x60;: Payload is optionally a stringified JSON object in the form: { \&quot;ackedUserPresence\&quot;: true }. &#x60;ackedUserPresence&#x60; is a boolean. By default, &#x60;ackedUserPresence&#x60; is set to &#x60;false&#x60;. To start a Chrome Remote Desktop session for an active device, set &#x60;ackedUserPresence&#x60; to &#x60;true&#x60;. * &#x60;REBOOT&#x60;: Payload is a stringified JSON object in the form: { \&quot;user_session_delay_seconds\&quot;: 300 }. The delay has to be in the range [0, 300]. * &#x60;FETCH_SUPPORT_PACKET&#x60;: Payload is optionally a stringified JSON object in the form: {\&quot;supportPacketDetails\&quot;:{ \&quot;issueCaseId\&quot;: optional_support_case_id_string, \&quot;issueDescription\&quot;: optional_issue_description_string, \&quot;requestedDataCollectors\&quot;: []}} The list of available &#x60;data_collector_enums&#x60; are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23). See more details in [help article](https://support.google.com/chrome/a?p&#x3D;remote-log). | [optional] 

## Example

```python
from openapi_client.models.directory_chromeosdevices_issue_command_request import DirectoryChromeosdevicesIssueCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryChromeosdevicesIssueCommandRequest from a JSON string
directory_chromeosdevices_issue_command_request_instance = DirectoryChromeosdevicesIssueCommandRequest.from_json(json)
# print the JSON string representation of the object
print(DirectoryChromeosdevicesIssueCommandRequest.to_json())

# convert the object into a dict
directory_chromeosdevices_issue_command_request_dict = directory_chromeosdevices_issue_command_request_instance.to_dict()
# create an instance of DirectoryChromeosdevicesIssueCommandRequest from a dict
directory_chromeosdevices_issue_command_request_from_dict = DirectoryChromeosdevicesIssueCommandRequest.from_dict(directory_chromeosdevices_issue_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


