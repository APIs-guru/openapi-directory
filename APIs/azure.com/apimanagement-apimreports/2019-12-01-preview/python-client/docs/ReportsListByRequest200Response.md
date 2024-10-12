# ReportsListByRequest200Response

Paged Report records list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**value** | [**List[ReportsListByRequest200ResponseValueInner]**](ReportsListByRequest200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.reports_list_by_request200_response import ReportsListByRequest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsListByRequest200Response from a JSON string
reports_list_by_request200_response_instance = ReportsListByRequest200Response.from_json(json)
# print the JSON string representation of the object
print(ReportsListByRequest200Response.to_json())

# convert the object into a dict
reports_list_by_request200_response_dict = reports_list_by_request200_response_instance.to_dict()
# create an instance of ReportsListByRequest200Response from a dict
reports_list_by_request200_response_from_dict = ReportsListByRequest200Response.from_dict(reports_list_by_request200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


