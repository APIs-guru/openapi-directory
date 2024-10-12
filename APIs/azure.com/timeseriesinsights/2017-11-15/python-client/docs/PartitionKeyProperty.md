# PartitionKeyProperty

The structure of the property that a partition key can have. An environment can have multiple such properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the property. | [optional] 
**type** | **str** | The type of the property. | [optional] 

## Example

```python
from openapi_client.models.partition_key_property import PartitionKeyProperty

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionKeyProperty from a JSON string
partition_key_property_instance = PartitionKeyProperty.from_json(json)
# print the JSON string representation of the object
print(PartitionKeyProperty.to_json())

# convert the object into a dict
partition_key_property_dict = partition_key_property_instance.to_dict()
# create an instance of PartitionKeyProperty from a dict
partition_key_property_from_dict = PartitionKeyProperty.from_dict(partition_key_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


