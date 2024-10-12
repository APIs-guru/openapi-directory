# TargetedBidsPagedCollection

A type that defines the keywords of the paged collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_bids** | [**List[SuggestedBids]**](SuggestedBids.md) | A list of bids in the paginated collection. | [optional] 

## Example

```python
from openapi_client.models.targeted_bids_paged_collection import TargetedBidsPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TargetedBidsPagedCollection from a JSON string
targeted_bids_paged_collection_instance = TargetedBidsPagedCollection.from_json(json)
# print the JSON string representation of the object
print(TargetedBidsPagedCollection.to_json())

# convert the object into a dict
targeted_bids_paged_collection_dict = targeted_bids_paged_collection_instance.to_dict()
# create an instance of TargetedBidsPagedCollection from a dict
targeted_bids_paged_collection_from_dict = TargetedBidsPagedCollection.from_dict(targeted_bids_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


