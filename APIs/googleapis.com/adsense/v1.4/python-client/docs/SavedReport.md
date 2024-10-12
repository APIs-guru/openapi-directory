# SavedReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this saved report. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#savedReport. | [optional] [default to 'adsense#savedReport']
**name** | **str** | This saved report&#39;s name. | [optional] 

## Example

```python
from openapi_client.models.saved_report import SavedReport

# TODO update the JSON string below
json = "{}"
# create an instance of SavedReport from a JSON string
saved_report_instance = SavedReport.from_json(json)
# print the JSON string representation of the object
print(SavedReport.to_json())

# convert the object into a dict
saved_report_dict = saved_report_instance.to_dict()
# create an instance of SavedReport from a dict
saved_report_from_dict = SavedReport.from_dict(saved_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


