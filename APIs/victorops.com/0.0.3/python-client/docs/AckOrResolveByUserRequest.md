# AckOrResolveByUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**user_name** | **str** |  | 

## Example

```python
from openapi_client.models.ack_or_resolve_by_user_request import AckOrResolveByUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AckOrResolveByUserRequest from a JSON string
ack_or_resolve_by_user_request_instance = AckOrResolveByUserRequest.from_json(json)
# print the JSON string representation of the object
print(AckOrResolveByUserRequest.to_json())

# convert the object into a dict
ack_or_resolve_by_user_request_dict = ack_or_resolve_by_user_request_instance.to_dict()
# create an instance of AckOrResolveByUserRequest from a dict
ack_or_resolve_by_user_request_from_dict = AckOrResolveByUserRequest.from_dict(ack_or_resolve_by_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


