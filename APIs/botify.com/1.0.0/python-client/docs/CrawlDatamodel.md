# CrawlDatamodel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[CrawlDatamodelField]**](CrawlDatamodelField.md) |  | 
**groups** | [**List[CrawlDatamodelGroup]**](CrawlDatamodelGroup.md) |  | 

## Example

```python
from openapi_client.models.crawl_datamodel import CrawlDatamodel

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlDatamodel from a JSON string
crawl_datamodel_instance = CrawlDatamodel.from_json(json)
# print the JSON string representation of the object
print(CrawlDatamodel.to_json())

# convert the object into a dict
crawl_datamodel_dict = crawl_datamodel_instance.to_dict()
# create an instance of CrawlDatamodel from a dict
crawl_datamodel_from_dict = CrawlDatamodel.from_dict(crawl_datamodel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


