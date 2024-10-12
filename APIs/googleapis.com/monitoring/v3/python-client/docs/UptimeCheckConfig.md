# UptimeCheckConfig

This message configures which resources and services to monitor for availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checker_type** | **str** | The type of checkers to use to execute the Uptime check. | [optional] 
**content_matchers** | [**List[ContentMatcher]**](ContentMatcher.md) | The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check. | [optional] 
**display_name** | **str** | A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required. | [optional] 
**http_check** | [**HttpCheck**](HttpCheck.md) |  | [optional] 
**internal_checkers** | [**List[InternalChecker]**](InternalChecker.md) | The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig. | [optional] 
**is_internal** | **bool** | If this is true, then checks are made only from the &#39;internal_checkers&#39;. If it is false, then checks are made only from the &#39;selected_regions&#39;. It is an error to provide &#39;selected_regions&#39; when is_internal is true, or to provide &#39;internal_checkers&#39; when is_internal is false. | [optional] 
**monitored_resource** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 
**name** | **str** | Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response. | [optional] 
**period** | **str** | How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s. | [optional] 
**resource_group** | [**ResourceGroup**](ResourceGroup.md) |  | [optional] 
**selected_regions** | **List[str]** | The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions. | [optional] 
**synthetic_monitor** | [**SyntheticMonitorTarget**](SyntheticMonitorTarget.md) |  | [optional] 
**tcp_check** | [**TcpCheck**](TcpCheck.md) |  | [optional] 
**timeout** | **str** | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required. | [optional] 
**user_labels** | **Dict[str, str]** | User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. | [optional] 

## Example

```python
from openapi_client.models.uptime_check_config import UptimeCheckConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UptimeCheckConfig from a JSON string
uptime_check_config_instance = UptimeCheckConfig.from_json(json)
# print the JSON string representation of the object
print(UptimeCheckConfig.to_json())

# convert the object into a dict
uptime_check_config_dict = uptime_check_config_instance.to_dict()
# create an instance of UptimeCheckConfig from a dict
uptime_check_config_from_dict = UptimeCheckConfig.from_dict(uptime_check_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


