# PostDriversRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] [default to True]
**address** | [**PostDriversRequestAddress**](PostDriversRequestAddress.md) |  | [optional] 
**email** | **str** |  | [optional] 
**firstname** | **str** |  | 
**lastname** | **str** |  | 
**phone** | [**PostDriversRequestPhone**](PostDriversRequestPhone.md) |  | [optional] 
**source** | **str** |  | 

## Example

```python
from openapi_client.models.post_drivers_request import PostDriversRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostDriversRequest from a JSON string
post_drivers_request_instance = PostDriversRequest.from_json(json)
# print the JSON string representation of the object
print(PostDriversRequest.to_json())

# convert the object into a dict
post_drivers_request_dict = post_drivers_request_instance.to_dict()
# create an instance of PostDriversRequest from a dict
post_drivers_request_from_dict = PostDriversRequest.from_dict(post_drivers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


