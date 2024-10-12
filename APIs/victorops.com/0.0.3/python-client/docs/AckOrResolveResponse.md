# AckOrResolveResponse

The results of ack/resolve for each incident

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[AckOrResolveResult]**](AckOrResolveResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.ack_or_resolve_response import AckOrResolveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AckOrResolveResponse from a JSON string
ack_or_resolve_response_instance = AckOrResolveResponse.from_json(json)
# print the JSON string representation of the object
print(AckOrResolveResponse.to_json())

# convert the object into a dict
ack_or_resolve_response_dict = ack_or_resolve_response_instance.to_dict()
# create an instance of AckOrResolveResponse from a dict
ack_or_resolve_response_from_dict = AckOrResolveResponse.from_dict(ack_or_resolve_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


