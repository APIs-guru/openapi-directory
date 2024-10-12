# MessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchid** | **str** |  | [optional] 
**content** | **str** |  | 
**created** | **str** |  | 
**customerid** | **str** |  | 
**deliveryreporturl** | **str** |  | [optional] 
**destination** | **float** |  | 
**failurereason** | [**MessageResponseFailurereason**](MessageResponseFailurereason.md) |  | [optional] 
**id** | **str** |  | [optional] 
**identifier** | **str** |  | [optional] 
**keyword** | **str** |  | [optional] 
**messageid** | **str** |  | 
**modified** | **str** |  | 
**schedule** | **str** |  | 
**sender** | **str** |  | 
**status** | **str** |  | 
**tag** | **str** |  | 

## Example

```python
from openapi_client.models.message_response import MessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageResponse from a JSON string
message_response_instance = MessageResponse.from_json(json)
# print the JSON string representation of the object
print(MessageResponse.to_json())

# convert the object into a dict
message_response_dict = message_response_instance.to_dict()
# create an instance of MessageResponse from a dict
message_response_from_dict = MessageResponse.from_dict(message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


