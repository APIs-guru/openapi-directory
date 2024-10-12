# BatchMessage

SMS Message Batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Message to send to the recipient | 
**deliveryreporturl** | **str** | The url to which we should POST delivery reports to for this message. If none is specified, we&#39;ll use the global delivery report URL that you&#39;ve configured on your account page. | [optional] 
**destinations** | **List[str]** | Telephone numbers of each of the recipients | 
**schedule** | **str** | Date-time at which to send the batch. This is only used by the batch/schedule service. | [optional] 
**sender** | **str** | The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID&#39;s. No spaces or special characters. | 
**tag** | **str** | An identifying label for the message, which you can use to filter and report on messages you&#39;ve sent later. Ideal for campaigns. A maximum of 280 characters. | [optional] 
**ttl** | **float** | The number of minutes before the delivery report is deleted. Optional. Omit to prevent delivery report deletion. Integer. | [optional] 
**validity** | **float** | The optional number of minutes to attempt delivery before the message is marked as EXPIRED. Optional. The default is 2880 minutes. Integer. | [optional] 

## Example

```python
from openapi_client.models.batch_message import BatchMessage

# TODO update the JSON string below
json = "{}"
# create an instance of BatchMessage from a JSON string
batch_message_instance = BatchMessage.from_json(json)
# print the JSON string representation of the object
print(BatchMessage.to_json())

# convert the object into a dict
batch_message_dict = batch_message_instance.to_dict()
# create an instance of BatchMessage from a dict
batch_message_from_dict = BatchMessage.from_dict(batch_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


