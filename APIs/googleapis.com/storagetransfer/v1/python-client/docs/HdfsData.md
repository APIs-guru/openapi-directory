# HdfsData

An HdfsData resource specifies a path within an HDFS entity (e.g. a cluster). All cluster-specific settings, such as namenodes and ports, are configured on the transfer agents servicing requests, so HdfsData only contains the root path to the data in our transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Root path to transfer files. | [optional] 

## Example

```python
from openapi_client.models.hdfs_data import HdfsData

# TODO update the JSON string below
json = "{}"
# create an instance of HdfsData from a JSON string
hdfs_data_instance = HdfsData.from_json(json)
# print the JSON string representation of the object
print(HdfsData.to_json())

# convert the object into a dict
hdfs_data_dict = hdfs_data_instance.to_dict()
# create an instance of HdfsData from a dict
hdfs_data_from_dict = HdfsData.from_dict(hdfs_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


