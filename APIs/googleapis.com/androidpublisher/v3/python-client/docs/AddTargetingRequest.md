# AddTargetingRequest

Request message for AddTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targeting_update** | [**TargetingUpdate**](TargetingUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_targeting_request import AddTargetingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTargetingRequest from a JSON string
add_targeting_request_instance = AddTargetingRequest.from_json(json)
# print the JSON string representation of the object
print(AddTargetingRequest.to_json())

# convert the object into a dict
add_targeting_request_dict = add_targeting_request_instance.to_dict()
# create an instance of AddTargetingRequest from a dict
add_targeting_request_from_dict = AddTargetingRequest.from_dict(add_targeting_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


