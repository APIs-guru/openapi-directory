# TelegrafRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**metadata** | [**TelegrafRequestMetadata**](TelegrafRequestMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.telegraf_request import TelegrafRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TelegrafRequest from a JSON string
telegraf_request_instance = TelegrafRequest.from_json(json)
# print the JSON string representation of the object
print(TelegrafRequest.to_json())

# convert the object into a dict
telegraf_request_dict = telegraf_request_instance.to_dict()
# create an instance of TelegrafRequest from a dict
telegraf_request_from_dict = TelegrafRequest.from_dict(telegraf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


