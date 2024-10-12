# SupportedConfiguration

An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | The default value for the property. If a value is omitted from the schedule and a default value is supplied, the default value is used. | [optional] 
**var_property** | **str** | Properties supported by the template. Properties can include the following: &lt;ul&gt;&lt;li&gt;&lt;b&gt;scheduleStartDate:&lt;/b&gt; The timestamp that the report generation (subscription) begins. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplate becomes inactive. Format: UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;b&gt;scheduleEndDate:&lt;/b&gt; The timestamp that the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE. Format: UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;b&gt;schemaVersion:&lt;/b&gt; The schema version of the schedule templates feedType. This field is required if the feedType has a schema version.&lt;/li&gt;&lt;li&gt;&lt;b&gt;preferredTriggerDayOfMonth:&lt;/b&gt; The preferred day of the month to trigger the schedule. &lt;/li&gt;&lt;li&gt;&lt;b&gt;preferredTriggerDayOfWeek:&lt;/b&gt; The preferred day of the week to trigger the schedule. &lt;/li&gt;&lt;li&gt;&lt;b&gt;preferredTriggerHour:&lt;/b&gt; The preferred two-digit hour of the day to trigger the schedule. Format: UTC &lt;code&gt;hhZ&lt;/code&gt;&lt;/li&gt;&lt;ul&gt; | [optional] 
**usage** | **str** | Whether the specified property is REQUIRED or OPTIONAL. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:ConfigurationsUsageEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.supported_configuration import SupportedConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedConfiguration from a JSON string
supported_configuration_instance = SupportedConfiguration.from_json(json)
# print the JSON string representation of the object
print(SupportedConfiguration.to_json())

# convert the object into a dict
supported_configuration_dict = supported_configuration_instance.to_dict()
# create an instance of SupportedConfiguration from a dict
supported_configuration_from_dict = SupportedConfiguration.from_dict(supported_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


