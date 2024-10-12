# PartitionLoadInformation

The information of the partition load

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** |  | [optional] 
**primary_load_metric_reports** | **List[str]** |  | [optional] 
**secondary_load_metric_reports** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.partition_load_information import PartitionLoadInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionLoadInformation from a JSON string
partition_load_information_instance = PartitionLoadInformation.from_json(json)
# print the JSON string representation of the object
print(PartitionLoadInformation.to_json())

# convert the object into a dict
partition_load_information_dict = partition_load_information_instance.to_dict()
# create an instance of PartitionLoadInformation from a dict
partition_load_information_from_dict = PartitionLoadInformation.from_dict(partition_load_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


