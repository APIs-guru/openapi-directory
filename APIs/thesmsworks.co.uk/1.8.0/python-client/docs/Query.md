# Query

search parameters for querying the message database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits** | **float** | The number of credits used on the message. Floating point number. | [optional] 
**destination** | **str** | The phone number of the recipient. Start UK numbers with 44 and drop the leading 0. | [optional] 
**var_from** | **str** | The date-time from which you would like matching messages | [optional] 
**keyword** | **str** | The keyword used in the inbound message | [optional] 
**limit** | **float** | The maximum number of messages that you would like returned in this call. The default is 1000. | [optional] 
**metadata** | [**QueryMetadata**](QueryMetadata.md) |  | [optional] 
**sender** | **str** | The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message). | [optional] 
**skip** | **float** | The number of results you would like to ignore before returning messages. In combination with the &#39;limit&#39; parameter his can be used to page results, so that you can deal with a limited number in your logic at each time. | [optional] 
**status** | **str** | The status of the messages you would like returned (either &#39;SENT&#39;, &#39;DELIVERED&#39;, &#39;EXPIRED&#39;, &#39;UNDELIVERABLE&#39;, &#39;REJECTED&#39; or &#39;INCOMING&#39;) | [optional] 
**to** | **str** | The date-time to which you would like matching messages | [optional] 
**unread** | **bool** | In queries for incoming messages (&#39;status&#39; is &#39;INCOMING&#39;), specify whether you explicitly want unread messages (true) or read messages (false). Omit this parameter in other circumstances. | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


