# IdFilter

A filtering option that filters entities by their entity IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_ad_ids** | **List[str]** | YouTube Ads to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 
**ad_group_ids** | **List[str]** | YouTube Ad Groups to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 
**campaign_ids** | **List[str]** | Campaigns to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 
**insertion_order_ids** | **List[str]** | Insertion Orders to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 
**line_item_ids** | **List[str]** | Line Items to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 
**media_product_ids** | **List[str]** | Media Products to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. | [optional] 

## Example

```python
from openapi_client.models.id_filter import IdFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IdFilter from a JSON string
id_filter_instance = IdFilter.from_json(json)
# print the JSON string representation of the object
print(IdFilter.to_json())

# convert the object into a dict
id_filter_dict = id_filter_instance.to_dict()
# create an instance of IdFilter from a dict
id_filter_from_dict = IdFilter.from_dict(id_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


