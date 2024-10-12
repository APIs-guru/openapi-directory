# SendersInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**stats** | [**SendersInfoResponseStats**](SendersInfoResponseStats.md) |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.senders_info_response import SendersInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendersInfoResponse from a JSON string
senders_info_response_instance = SendersInfoResponse.from_json(json)
# print the JSON string representation of the object
print(SendersInfoResponse.to_json())

# convert the object into a dict
senders_info_response_dict = senders_info_response_instance.to_dict()
# create an instance of SendersInfoResponse from a dict
senders_info_response_from_dict = SendersInfoResponse.from_dict(senders_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


