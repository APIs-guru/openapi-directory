# BrowserInfo

Browser-specific fields reported by the Endpoint Verification extension. LINT.IfChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_management_state** | **str** | Output only. Browser&#39;s management state. | [optional] [readonly] 
**browser_version** | **str** | Version of the request initiating browser. | [optional] 
**is_built_in_dns_client_enabled** | **bool** | Current state of [built-in DNS client](https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled). | [optional] 
**is_bulk_data_entry_analysis_enabled** | **bool** | Current state of [bulk data analysis](https://chromeenterprise.google/policies/#OnBulkDataEntryEnterpriseConnector). Set to true if provider list from Chrome is non-empty. | [optional] 
**is_chrome_cleanup_enabled** | **bool** | Current state of [Chrome Cleanup](https://chromeenterprise.google/policies/#ChromeCleanupEnabled). | [optional] 
**is_chrome_remote_desktop_app_blocked** | **bool** | Current state of [Chrome Remote Desktop app](https://chromeenterprise.google/policies/#URLBlocklist). | [optional] 
**is_file_download_analysis_enabled** | **bool** | Current state of [file download analysis](https://chromeenterprise.google/policies/#OnFileDownloadedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. | [optional] 
**is_file_upload_analysis_enabled** | **bool** | Current state of [file upload analysis](https://chromeenterprise.google/policies/#OnFileAttachedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. | [optional] 
**is_realtime_url_check_enabled** | **bool** | Current state of [real-time URL check](https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode). Set to true if provider list from Chrome is non-empty. | [optional] 
**is_security_event_analysis_enabled** | **bool** | Current state of [security event analysis](https://chromeenterprise.google/policies/#OnSecurityEventEnterpriseConnector). Set to true if provider list from Chrome is non-empty. | [optional] 
**is_site_isolation_enabled** | **bool** | Current state of [site isolation](https://chromeenterprise.google/policies/?policy&#x3D;IsolateOrigins). | [optional] 
**is_third_party_blocking_enabled** | **bool** | Current state of [third-party blocking](https://chromeenterprise.google/policies/#ThirdPartyBlockingEnabled). | [optional] 
**password_protection_warning_trigger** | **str** | Current state of [password protection trigger](https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger). | [optional] 
**safe_browsing_protection_level** | **str** | Current state of [Safe Browsing protection level](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel). | [optional] 

## Example

```python
from openapi_client.models.browser_info import BrowserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserInfo from a JSON string
browser_info_instance = BrowserInfo.from_json(json)
# print the JSON string representation of the object
print(BrowserInfo.to_json())

# convert the object into a dict
browser_info_dict = browser_info_instance.to_dict()
# create an instance of BrowserInfo from a dict
browser_info_from_dict = BrowserInfo.from_dict(browser_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


