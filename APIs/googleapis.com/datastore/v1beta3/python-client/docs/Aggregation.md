# Aggregation

Defines an aggregation that produces a single result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format &#x60;property_&#x60;. For example: &#x60;&#x60;&#x60; AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); &#x60;&#x60;&#x60; becomes: &#x60;&#x60;&#x60; AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); &#x60;&#x60;&#x60; Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations. | [optional] 
**avg** | [**Avg**](Avg.md) |  | [optional] 
**count** | [**Count**](Count.md) |  | [optional] 
**sum** | [**Sum**](Sum.md) |  | [optional] 

## Example

```python
from openapi_client.models.aggregation import Aggregation

# TODO update the JSON string below
json = "{}"
# create an instance of Aggregation from a JSON string
aggregation_instance = Aggregation.from_json(json)
# print the JSON string representation of the object
print(Aggregation.to_json())

# convert the object into a dict
aggregation_dict = aggregation_instance.to_dict()
# create an instance of Aggregation from a dict
aggregation_from_dict = Aggregation.from_dict(aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


