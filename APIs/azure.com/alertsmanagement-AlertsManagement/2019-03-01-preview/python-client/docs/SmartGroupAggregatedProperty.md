# SmartGroupAggregatedProperty

Aggregated property of each type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of items of type. | [optional] 
**name** | **str** | Name of the type. | [optional] 

## Example

```python
from openapi_client.models.smart_group_aggregated_property import SmartGroupAggregatedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupAggregatedProperty from a JSON string
smart_group_aggregated_property_instance = SmartGroupAggregatedProperty.from_json(json)
# print the JSON string representation of the object
print(SmartGroupAggregatedProperty.to_json())

# convert the object into a dict
smart_group_aggregated_property_dict = smart_group_aggregated_property_instance.to_dict()
# create an instance of SmartGroupAggregatedProperty from a dict
smart_group_aggregated_property_from_dict = SmartGroupAggregatedProperty.from_dict(smart_group_aggregated_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


