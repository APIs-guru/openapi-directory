# ReadOptions

The options shared by read requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_transaction** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**read_consistency** | **str** | The non-transactional read consistency to use. | [optional] 
**read_time** | **str** | Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 
**transaction** | **bytearray** | The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction. | [optional] 

## Example

```python
from openapi_client.models.read_options import ReadOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ReadOptions from a JSON string
read_options_instance = ReadOptions.from_json(json)
# print the JSON string representation of the object
print(ReadOptions.to_json())

# convert the object into a dict
read_options_dict = read_options_instance.to_dict()
# create an instance of ReadOptions from a dict
read_options_from_dict = ReadOptions.from_dict(read_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


