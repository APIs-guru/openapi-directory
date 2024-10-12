# TimePartitioning

Configuration for FHIR BigQuery time-partitioned tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_ms** | **str** | Number of milliseconds for which to keep the storage for a partition. | [optional] 
**type** | **str** | Type of partitioning. | [optional] 

## Example

```python
from openapi_client.models.time_partitioning import TimePartitioning

# TODO update the JSON string below
json = "{}"
# create an instance of TimePartitioning from a JSON string
time_partitioning_instance = TimePartitioning.from_json(json)
# print the JSON string representation of the object
print(TimePartitioning.to_json())

# convert the object into a dict
time_partitioning_dict = time_partitioning_instance.to_dict()
# create an instance of TimePartitioning from a dict
time_partitioning_from_dict = TimePartitioning.from_dict(time_partitioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


