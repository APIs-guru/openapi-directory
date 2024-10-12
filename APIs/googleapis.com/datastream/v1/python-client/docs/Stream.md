# Stream

A resource representing streaming data from a source to a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_all** | [**BackfillAllStrategy**](BackfillAllStrategy.md) |  | [optional] 
**backfill_none** | **object** | Backfill strategy to disable automatic backfill for the Stream&#39;s objects. | [optional] 
**create_time** | **str** | Output only. The creation time of the stream. | [optional] [readonly] 
**customer_managed_encryption_key** | **str** | Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. | [optional] 
**destination_config** | [**DestinationConfig**](DestinationConfig.md) |  | [optional] 
**display_name** | **str** | Required. Display name. | [optional] 
**errors** | [**List[Error]**](Error.md) | Output only. Errors on the Stream. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels. | [optional] 
**last_recovery_time** | **str** | Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental. | [optional] [readonly] 
**name** | **str** | Output only. The stream&#39;s name. | [optional] [readonly] 
**source_config** | [**SourceConfig**](SourceConfig.md) |  | [optional] 
**state** | **str** | The state of the stream. | [optional] 
**update_time** | **str** | Output only. The last update time of the stream. | [optional] [readonly] 

## Example

```python
from openapi_client.models.stream import Stream

# TODO update the JSON string below
json = "{}"
# create an instance of Stream from a JSON string
stream_instance = Stream.from_json(json)
# print the JSON string representation of the object
print(Stream.to_json())

# convert the object into a dict
stream_dict = stream_instance.to_dict()
# create an instance of Stream from a dict
stream_from_dict = Stream.from_dict(stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


