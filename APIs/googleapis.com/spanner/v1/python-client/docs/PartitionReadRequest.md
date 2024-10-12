# PartitionReadRequest

The request for PartitionRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | The columns of table to be returned for each row matching this request. | [optional] 
**index** | **str** | If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information. | [optional] 
**key_set** | [**KeySet**](KeySet.md) |  | [optional] 
**partition_options** | [**PartitionOptions**](PartitionOptions.md) |  | [optional] 
**table** | **str** | Required. The name of the table in the database to be read. | [optional] 
**transaction** | [**TransactionSelector**](TransactionSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_read_request import PartitionReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionReadRequest from a JSON string
partition_read_request_instance = PartitionReadRequest.from_json(json)
# print the JSON string representation of the object
print(PartitionReadRequest.to_json())

# convert the object into a dict
partition_read_request_dict = partition_read_request_instance.to_dict()
# create an instance of PartitionReadRequest from a dict
partition_read_request_from_dict = PartitionReadRequest.from_dict(partition_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


