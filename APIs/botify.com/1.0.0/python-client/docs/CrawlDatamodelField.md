# CrawlDatamodelField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** |  | 
**id** | **str** |  | 
**multiple** | **bool** |  | 
**name** | **str** |  | 
**permissions** | **List[str]** |  | 
**subtype** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.crawl_datamodel_field import CrawlDatamodelField

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlDatamodelField from a JSON string
crawl_datamodel_field_instance = CrawlDatamodelField.from_json(json)
# print the JSON string representation of the object
print(CrawlDatamodelField.to_json())

# convert the object into a dict
crawl_datamodel_field_dict = crawl_datamodel_field_instance.to_dict()
# create an instance of CrawlDatamodelField from a dict
crawl_datamodel_field_from_dict = CrawlDatamodelField.from_dict(crawl_datamodel_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


