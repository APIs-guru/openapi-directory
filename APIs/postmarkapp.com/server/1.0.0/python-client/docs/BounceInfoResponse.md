# BounceInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounced_at** | **datetime** |  | [optional] 
**can_activate** | **bool** |  | [optional] 
**content** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**details** | **str** |  | [optional] 
**dump_available** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**inactive** | **bool** |  | [optional] 
**message_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.bounce_info_response import BounceInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BounceInfoResponse from a JSON string
bounce_info_response_instance = BounceInfoResponse.from_json(json)
# print the JSON string representation of the object
print(BounceInfoResponse.to_json())

# convert the object into a dict
bounce_info_response_dict = bounce_info_response_instance.to_dict()
# create an instance of BounceInfoResponse from a dict
bounce_info_response_from_dict = BounceInfoResponse.from_dict(bounce_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


