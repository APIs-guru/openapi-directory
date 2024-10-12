# UsageReportsWarningsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Machine readable code or warning type. The warning code value is &#x60;200&#x60;. | [optional] 
**data** | [**List[UsageReportsWarningsInnerDataInner]**](UsageReportsWarningsInnerDataInner.md) | Key-value pairs to give detailed information on the warning. | [optional] 
**message** | **str** | The human readable messages for a warning are: - Data is not available warning - Sorry, data for date yyyy-mm-dd for application \&quot;&#x60;application name&#x60;\&quot; is not available. - Partial data is available warning - Data for date yyyy-mm-dd for application \&quot;&#x60;application name&#x60;\&quot; is not available right now, please try again after a few hours.  | [optional] 

## Example

```python
from openapi_client.models.usage_reports_warnings_inner import UsageReportsWarningsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsageReportsWarningsInner from a JSON string
usage_reports_warnings_inner_instance = UsageReportsWarningsInner.from_json(json)
# print the JSON string representation of the object
print(UsageReportsWarningsInner.to_json())

# convert the object into a dict
usage_reports_warnings_inner_dict = usage_reports_warnings_inner_instance.to_dict()
# create an instance of UsageReportsWarningsInner from a dict
usage_reports_warnings_inner_from_dict = UsageReportsWarningsInner.from_dict(usage_reports_warnings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


