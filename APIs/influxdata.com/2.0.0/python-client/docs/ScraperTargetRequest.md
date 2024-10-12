# ScraperTargetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Skip TLS verification on endpoint. | [optional] [default to False]
**bucket_id** | **str** | The ID of the bucket to write to. | [optional] 
**name** | **str** | The name of the scraper target. | [optional] 
**org_id** | **str** | The organization ID. | [optional] 
**type** | **str** | The type of the metrics to be parsed. | [optional] 
**url** | **str** | The URL of the metrics endpoint. | [optional] 

## Example

```python
from openapi_client.models.scraper_target_request import ScraperTargetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScraperTargetRequest from a JSON string
scraper_target_request_instance = ScraperTargetRequest.from_json(json)
# print the JSON string representation of the object
print(ScraperTargetRequest.to_json())

# convert the object into a dict
scraper_target_request_dict = scraper_target_request_instance.to_dict()
# create an instance of ScraperTargetRequest from a dict
scraper_target_request_from_dict = ScraperTargetRequest.from_dict(scraper_target_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


