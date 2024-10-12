# CollectionPeriod

The collection period is a date range which includes the `first` and `last` day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**last_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.collection_period import CollectionPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionPeriod from a JSON string
collection_period_instance = CollectionPeriod.from_json(json)
# print the JSON string representation of the object
print(CollectionPeriod.to_json())

# convert the object into a dict
collection_period_dict = collection_period_instance.to_dict()
# create an instance of CollectionPeriod from a dict
collection_period_from_dict = CollectionPeriod.from_dict(collection_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


