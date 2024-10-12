# QuotaCounterCollection

Paged Quota Counter list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[QuotaCounterContract]**](QuotaCounterContract.md) | Quota counter values. | [optional] 

## Example

```python
from openapi_client.models.quota_counter_collection import QuotaCounterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaCounterCollection from a JSON string
quota_counter_collection_instance = QuotaCounterCollection.from_json(json)
# print the JSON string representation of the object
print(QuotaCounterCollection.to_json())

# convert the object into a dict
quota_counter_collection_dict = quota_counter_collection_instance.to_dict()
# create an instance of QuotaCounterCollection from a dict
quota_counter_collection_from_dict = QuotaCounterCollection.from_dict(quota_counter_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


