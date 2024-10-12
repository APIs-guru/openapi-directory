# ReadOnly

Message type to initiate a read-only transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_staleness** | **str** | Executes all reads at a timestamp that is &#x60;exact_staleness&#x60; old. The timestamp is chosen soon after the read is started. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client&#39;s local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of &#x60;max_staleness&#x60;. | [optional] 
**max_staleness** | **str** | Read data at a timestamp &gt;&#x3D; &#x60;NOW - max_staleness&#x60; seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client&#39;s local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind. Note that this option can only be used in single-use transactions. | [optional] 
**min_read_timestamp** | **str** | Executes all reads at a timestamp &gt;&#x3D; &#x60;min_read_timestamp&#x60;. This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known. Note that this option can only be used in single-use transactions. A timestamp in RFC3339 UTC \\\&quot;Zulu\\\&quot; format, accurate to nanoseconds. Example: &#x60;\&quot;2014-10-02T15:01:23.045123456Z\&quot;&#x60;. | [optional] 
**read_timestamp** | **str** | Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read&#39;s deadline. Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data. A timestamp in RFC3339 UTC \\\&quot;Zulu\\\&quot; format, accurate to nanoseconds. Example: &#x60;\&quot;2014-10-02T15:01:23.045123456Z\&quot;&#x60;. | [optional] 
**return_read_timestamp** | **bool** | If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction. | [optional] 
**strong** | **bool** | Read at a timestamp where all previously committed transactions are visible. | [optional] 

## Example

```python
from openapi_client.models.read_only import ReadOnly

# TODO update the JSON string below
json = "{}"
# create an instance of ReadOnly from a JSON string
read_only_instance = ReadOnly.from_json(json)
# print the JSON string representation of the object
print(ReadOnly.to_json())

# convert the object into a dict
read_only_dict = read_only_instance.to_dict()
# create an instance of ReadOnly from a dict
read_only_from_dict = ReadOnly.from_dict(read_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


