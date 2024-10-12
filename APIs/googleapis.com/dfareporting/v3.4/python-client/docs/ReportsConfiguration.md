# ReportsConfiguration

Reporting Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exposure_to_conversion_enabled** | **bool** | Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. | [optional] 
**lookback_configuration** | [**LookbackConfiguration**](LookbackConfiguration.md) |  | [optional] 
**report_generation_time_zone_id** | **str** | Report generation time zone ID of this account. This is a required field that can only be changed by a superuser. Acceptable values are: - \&quot;1\&quot; for \&quot;America/New_York\&quot; - \&quot;2\&quot; for \&quot;Europe/London\&quot; - \&quot;3\&quot; for \&quot;Europe/Paris\&quot; - \&quot;4\&quot; for \&quot;Africa/Johannesburg\&quot; - \&quot;5\&quot; for \&quot;Asia/Jerusalem\&quot; - \&quot;6\&quot; for \&quot;Asia/Shanghai\&quot; - \&quot;7\&quot; for \&quot;Asia/Hong_Kong\&quot; - \&quot;8\&quot; for \&quot;Asia/Tokyo\&quot; - \&quot;9\&quot; for \&quot;Australia/Sydney\&quot; - \&quot;10\&quot; for \&quot;Asia/Dubai\&quot; - \&quot;11\&quot; for \&quot;America/Los_Angeles\&quot; - \&quot;12\&quot; for \&quot;Pacific/Auckland\&quot; - \&quot;13\&quot; for \&quot;America/Sao_Paulo\&quot; - \&quot;16\&quot; for \&quot;America/Asuncion\&quot; - \&quot;17\&quot; for \&quot;America/Chicago\&quot; - \&quot;18\&quot; for \&quot;America/Denver\&quot; - \&quot;19\&quot; for \&quot;America/St_Johns\&quot; - \&quot;20\&quot; for \&quot;Asia/Dhaka\&quot; - \&quot;21\&quot; for \&quot;Asia/Jakarta\&quot; - \&quot;22\&quot; for \&quot;Asia/Kabul\&quot; - \&quot;23\&quot; for \&quot;Asia/Karachi\&quot; - \&quot;24\&quot; for \&quot;Asia/Calcutta\&quot; - \&quot;25\&quot; for \&quot;Asia/Pyongyang\&quot; - \&quot;26\&quot; for \&quot;Asia/Rangoon\&quot; - \&quot;27\&quot; for \&quot;Atlantic/Cape_Verde\&quot; - \&quot;28\&quot; for \&quot;Atlantic/South_Georgia\&quot; - \&quot;29\&quot; for \&quot;Australia/Adelaide\&quot; - \&quot;30\&quot; for \&quot;Australia/Lord_Howe\&quot; - \&quot;31\&quot; for \&quot;Europe/Moscow\&quot; - \&quot;32\&quot; for \&quot;Pacific/Kiritimati\&quot; - \&quot;35\&quot; for \&quot;Pacific/Norfolk\&quot; - \&quot;36\&quot; for \&quot;Pacific/Tongatapu\&quot;  | [optional] 

## Example

```python
from openapi_client.models.reports_configuration import ReportsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsConfiguration from a JSON string
reports_configuration_instance = ReportsConfiguration.from_json(json)
# print the JSON string representation of the object
print(ReportsConfiguration.to_json())

# convert the object into a dict
reports_configuration_dict = reports_configuration_instance.to_dict()
# create an instance of ReportsConfiguration from a dict
reports_configuration_from_dict = ReportsConfiguration.from_dict(reports_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


