# CollectionStatusItemLevelIssue

Issue associated with the collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_countries** | **List[str]** | Country codes (ISO 3166-1 alpha-2) where issue applies to the offer. | [optional] 
**attribute_name** | **str** | The attribute&#39;s name, if the issue is caused by a single attribute. | [optional] 
**code** | **str** | The error code of the issue. | [optional] 
**description** | **str** | A short issue description in English. | [optional] 
**destination** | **str** | The destination the issue applies to. | [optional] 
**detail** | **str** | A detailed issue description in English. | [optional] 
**documentation** | **str** | The URL of a web page to help with resolving this issue. | [optional] 
**resolution** | **str** | Whether the issue can be resolved by the merchant. | [optional] 
**servability** | **str** | How this issue affects the serving of the collection. | [optional] 

## Example

```python
from openapi_client.models.collection_status_item_level_issue import CollectionStatusItemLevelIssue

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionStatusItemLevelIssue from a JSON string
collection_status_item_level_issue_instance = CollectionStatusItemLevelIssue.from_json(json)
# print the JSON string representation of the object
print(CollectionStatusItemLevelIssue.to_json())

# convert the object into a dict
collection_status_item_level_issue_dict = collection_status_item_level_issue_instance.to_dict()
# create an instance of CollectionStatusItemLevelIssue from a dict
collection_status_item_level_issue_from_dict = CollectionStatusItemLevelIssue.from_dict(collection_status_item_level_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


