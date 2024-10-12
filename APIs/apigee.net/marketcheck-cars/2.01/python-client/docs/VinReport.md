# VinReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** | icon url | [optional] 
**some_text** | **str** | Some descriptional text | [optional] 

## Example

```python
from openapi_client.models.vin_report import VinReport

# TODO update the JSON string below
json = "{}"
# create an instance of VinReport from a JSON string
vin_report_instance = VinReport.from_json(json)
# print the JSON string representation of the object
print(VinReport.to_json())

# convert the object into a dict
vin_report_dict = vin_report_instance.to_dict()
# create an instance of VinReport from a dict
vin_report_from_dict = VinReport.from_dict(vin_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


