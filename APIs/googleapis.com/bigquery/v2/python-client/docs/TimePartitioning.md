# TimePartitioning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_ms** | **str** | Optional. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value. | [optional] 
**var_field** | **str** | Optional. If not set, the table is partitioned by pseudo column &#39;_PARTITIONTIME&#39;; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. A wrapper is used here because an empty string is an invalid value. | [optional] 
**require_partition_filter** | **bool** | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. This field is deprecated; please set the field with the same name on the table itself instead. This field needs a wrapper because we want to output the default value, false, if the user explicitly set it. | [optional] [default to False]
**type** | **str** | Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. | [optional] 

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


