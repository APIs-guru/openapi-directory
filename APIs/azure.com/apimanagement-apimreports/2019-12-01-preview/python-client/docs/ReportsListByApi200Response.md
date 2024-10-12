# ReportsListByApi200Response

Paged Report records list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ReportsListByApi200ResponseValueInner]**](ReportsListByApi200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.reports_list_by_api200_response import ReportsListByApi200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsListByApi200Response from a JSON string
reports_list_by_api200_response_instance = ReportsListByApi200Response.from_json(json)
# print the JSON string representation of the object
print(ReportsListByApi200Response.to_json())

# convert the object into a dict
reports_list_by_api200_response_dict = reports_list_by_api200_response_instance.to_dict()
# create an instance of ReportsListByApi200Response from a dict
reports_list_by_api200_response_from_dict = ReportsListByApi200Response.from_dict(reports_list_by_api200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


