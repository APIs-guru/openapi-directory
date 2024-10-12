# ScrapeResult

The result of a scrape request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of results returned | [optional] 
**cursor** | **str** | A scroll handle | [optional] 
**items** | **List[object]** |  | [optional] 
**previous** | **str** | A scroll handle | [optional] 
**total** | **int** | Total number of results from this cursor point | [optional] 

## Example

```python
from openapi_client.models.scrape_result import ScrapeResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScrapeResult from a JSON string
scrape_result_instance = ScrapeResult.from_json(json)
# print the JSON string representation of the object
print(ScrapeResult.to_json())

# convert the object into a dict
scrape_result_dict = scrape_result_instance.to_dict()
# create an instance of ScrapeResult from a dict
scrape_result_from_dict = ScrapeResult.from_dict(scrape_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


