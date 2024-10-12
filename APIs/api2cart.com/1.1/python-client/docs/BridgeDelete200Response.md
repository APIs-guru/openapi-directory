# BridgeDelete200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**BridgeDelete200ResponseResult**](BridgeDelete200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bridge_delete200_response import BridgeDelete200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BridgeDelete200Response from a JSON string
bridge_delete200_response_instance = BridgeDelete200Response.from_json(json)
# print the JSON string representation of the object
print(BridgeDelete200Response.to_json())

# convert the object into a dict
bridge_delete200_response_dict = bridge_delete200_response_instance.to_dict()
# create an instance of BridgeDelete200Response from a dict
bridge_delete200_response_from_dict = BridgeDelete200Response.from_dict(bridge_delete200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


