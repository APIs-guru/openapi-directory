# AdsenseReportsGenerateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averages** | **List[str]** | The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. | [optional] 
**end_date** | **str** | The requested end date in yyyy-mm-dd format. | [optional] 
**headers** | [**List[AdsenseReportsGenerateResponseHeadersInner]**](AdsenseReportsGenerateResponseHeadersInner.md) | The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request. | [optional] 
**kind** | **str** | Kind this is, in this case adsense#report. | [optional] [default to 'adsense#report']
**rows** | **List[List[str]]** | The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers. | [optional] 
**start_date** | **str** | The requested start date in yyyy-mm-dd format. | [optional] 
**total_matched_rows** | **str** | The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. | [optional] 
**totals** | **List[str]** | The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. | [optional] 
**warnings** | **List[str]** | Any warnings associated with generation of the report. | [optional] 

## Example

```python
from openapi_client.models.adsense_reports_generate_response import AdsenseReportsGenerateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdsenseReportsGenerateResponse from a JSON string
adsense_reports_generate_response_instance = AdsenseReportsGenerateResponse.from_json(json)
# print the JSON string representation of the object
print(AdsenseReportsGenerateResponse.to_json())

# convert the object into a dict
adsense_reports_generate_response_dict = adsense_reports_generate_response_instance.to_dict()
# create an instance of AdsenseReportsGenerateResponse from a dict
adsense_reports_generate_response_from_dict = AdsenseReportsGenerateResponse.from_dict(adsense_reports_generate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


