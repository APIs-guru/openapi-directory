# ReportsWebsiteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ReportsWebsiteItem]**](ReportsWebsiteItem.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**total_count** | **int** |  | [optional] 
**totals** | [**Totals**](Totals.md) |  | [optional] 

## Example

```python
from openapi_client.models.reports_website_response import ReportsWebsiteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsWebsiteResponse from a JSON string
reports_website_response_instance = ReportsWebsiteResponse.from_json(json)
# print the JSON string representation of the object
print(ReportsWebsiteResponse.to_json())

# convert the object into a dict
reports_website_response_dict = reports_website_response_instance.to_dict()
# create an instance of ReportsWebsiteResponse from a dict
reports_website_response_from_dict = ReportsWebsiteResponse.from_dict(reports_website_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


