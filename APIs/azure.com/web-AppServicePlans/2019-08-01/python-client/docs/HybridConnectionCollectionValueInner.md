# HybridConnectionCollectionValueInner

Hybrid Connection contract. This is used to configure a Hybrid Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansGetHybridConnection200ResponseProperties**](AppServicePlansGetHybridConnection200ResponseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hybrid_connection_collection_value_inner import HybridConnectionCollectionValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionCollectionValueInner from a JSON string
hybrid_connection_collection_value_inner_instance = HybridConnectionCollectionValueInner.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionCollectionValueInner.to_json())

# convert the object into a dict
hybrid_connection_collection_value_inner_dict = hybrid_connection_collection_value_inner_instance.to_dict()
# create an instance of HybridConnectionCollectionValueInner from a dict
hybrid_connection_collection_value_inner_from_dict = HybridConnectionCollectionValueInner.from_dict(hybrid_connection_collection_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


