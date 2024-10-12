# IntervalCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**IntervalCollection**](IntervalCollection.md) |  | [optional] 
**error** | **str** |  | [optional] 
**requested_currency** | **str** |  | [optional] 
**requested_symbol** | **str** |  | [optional] 
**requested_unit_of_measure** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.interval_collection_response import IntervalCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntervalCollectionResponse from a JSON string
interval_collection_response_instance = IntervalCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(IntervalCollectionResponse.to_json())

# convert the object into a dict
interval_collection_response_dict = interval_collection_response_instance.to_dict()
# create an instance of IntervalCollectionResponse from a dict
interval_collection_response_from_dict = IntervalCollectionResponse.from_dict(interval_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


