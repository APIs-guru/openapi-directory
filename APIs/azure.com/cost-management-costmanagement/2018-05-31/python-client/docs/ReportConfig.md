# ReportConfig

A report config resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReportConfigProperties**](ReportConfigProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_config import ReportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfig from a JSON string
report_config_instance = ReportConfig.from_json(json)
# print the JSON string representation of the object
print(ReportConfig.to_json())

# convert the object into a dict
report_config_dict = report_config_instance.to_dict()
# create an instance of ReportConfig from a dict
report_config_from_dict = ReportConfig.from_dict(report_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


