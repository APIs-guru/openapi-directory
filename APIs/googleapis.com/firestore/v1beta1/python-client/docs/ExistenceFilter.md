# ExistenceFilter

A digest of all the documents that match a given target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target. The client can use the &#x60;unchanged_names&#x60; bloom filter to assist with this determination by testing ALL the document names against the filter; if the document name is NOT in the filter, it means the document no longer matches the target. | [optional] 
**target_id** | **int** | The target ID to which this filter applies. | [optional] 
**unchanged_names** | [**BloomFilter**](BloomFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.existence_filter import ExistenceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ExistenceFilter from a JSON string
existence_filter_instance = ExistenceFilter.from_json(json)
# print the JSON string representation of the object
print(ExistenceFilter.to_json())

# convert the object into a dict
existence_filter_dict = existence_filter_instance.to_dict()
# create an instance of ExistenceFilter from a dict
existence_filter_from_dict = ExistenceFilter.from_dict(existence_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


