# CollectionStatus

The collectionstatus message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_level_issuses** | [**List[CollectionStatusItemLevelIssue]**](CollectionStatusItemLevelIssue.md) | A list of all issues associated with the collection. | [optional] 
**creation_date** | **str** | Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot; | [optional] 
**destination_statuses** | [**List[CollectionStatusDestinationStatus]**](CollectionStatusDestinationStatus.md) | The intended destinations for the collection. | [optional] 
**id** | **str** | Required. The ID of the collection for which status is reported. | [optional] 
**last_update_date** | **str** | Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot; | [optional] 

## Example

```python
from openapi_client.models.collection_status import CollectionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionStatus from a JSON string
collection_status_instance = CollectionStatus.from_json(json)
# print the JSON string representation of the object
print(CollectionStatus.to_json())

# convert the object into a dict
collection_status_dict = collection_status_instance.to_dict()
# create an instance of CollectionStatus from a dict
collection_status_from_dict = CollectionStatus.from_dict(collection_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


