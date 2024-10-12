# Kpi

Settings that control the key performance indicator, or KPI, of an insertion order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kpi_amount_micros** | **str** | The goal amount, in micros of the advertiser&#39;s currency. Applicable when kpi_type is one of: * &#x60;KPI_TYPE_CPM&#x60; * &#x60;KPI_TYPE_CPC&#x60; * &#x60;KPI_TYPE_CPA&#x60; * &#x60;KPI_TYPE_CPIAVC&#x60; * &#x60;KPI_TYPE_VCPM&#x60; For example: 1500000 represents 1.5 standard units of the currency. | [optional] 
**kpi_percentage_micros** | **str** | The decimal representation of the goal percentage in micros. Applicable when kpi_type is one of: * &#x60;KPI_TYPE_CTR&#x60; * &#x60;KPI_TYPE_VIEWABILITY&#x60; * &#x60;KPI_TYPE_CLICK_CVR&#x60; * &#x60;KPI_TYPE_IMPRESSION_CVR&#x60; * &#x60;KPI_TYPE_VTR&#x60; * &#x60;KPI_TYPE_AUDIO_COMPLETION_RATE&#x60; * &#x60;KPI_TYPE_VIDEO_COMPLETION_RATE&#x60; For example: 70000 represents 7% (decimal 0.07). | [optional] 
**kpi_string** | **str** | A KPI string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when kpi_type is &#x60;KPI_TYPE_OTHER&#x60;. | [optional] 
**kpi_type** | **str** | Required. The type of KPI. | [optional] 

## Example

```python
from openapi_client.models.kpi import Kpi

# TODO update the JSON string below
json = "{}"
# create an instance of Kpi from a JSON string
kpi_instance = Kpi.from_json(json)
# print the JSON string representation of the object
print(Kpi.to_json())

# convert the object into a dict
kpi_dict = kpi_instance.to_dict()
# create an instance of Kpi from a dict
kpi_from_dict = Kpi.from_dict(kpi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


