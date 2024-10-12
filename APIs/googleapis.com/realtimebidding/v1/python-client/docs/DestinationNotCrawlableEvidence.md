# DestinationNotCrawlableEvidence

Evidence that the creative's destination URL was not crawlable by Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crawl_time** | **str** | Approximate time of the crawl. | [optional] 
**crawled_url** | **str** | Destination URL that was attempted to be crawled. | [optional] 
**reason** | **str** | Reason of destination not crawlable. | [optional] 

## Example

```python
from openapi_client.models.destination_not_crawlable_evidence import DestinationNotCrawlableEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationNotCrawlableEvidence from a JSON string
destination_not_crawlable_evidence_instance = DestinationNotCrawlableEvidence.from_json(json)
# print the JSON string representation of the object
print(DestinationNotCrawlableEvidence.to_json())

# convert the object into a dict
destination_not_crawlable_evidence_dict = destination_not_crawlable_evidence_instance.to_dict()
# create an instance of DestinationNotCrawlableEvidence from a dict
destination_not_crawlable_evidence_from_dict = DestinationNotCrawlableEvidence.from_dict(destination_not_crawlable_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


