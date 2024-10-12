# ReportsWebsiteItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **str** |  | [optional] 
**cpc** | **str** |  | [optional] 
**ctr** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**earnings** | **str** |  | [optional] 
**impressions** | **str** |  | [optional] 
**net_ecpm** | **str** |  | [optional] 
**rpm** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reports_website_item import ReportsWebsiteItem

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsWebsiteItem from a JSON string
reports_website_item_instance = ReportsWebsiteItem.from_json(json)
# print the JSON string representation of the object
print(ReportsWebsiteItem.to_json())

# convert the object into a dict
reports_website_item_dict = reports_website_item_instance.to_dict()
# create an instance of ReportsWebsiteItem from a dict
reports_website_item_from_dict = ReportsWebsiteItem.from_dict(reports_website_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


