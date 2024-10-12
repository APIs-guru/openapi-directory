# AckOrResolveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_names** | **List[str]** |  | 
**message** | **str** |  | [optional] 
**user_name** | **str** |  | 

## Example

```python
from openapi_client.models.ack_or_resolve_request import AckOrResolveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AckOrResolveRequest from a JSON string
ack_or_resolve_request_instance = AckOrResolveRequest.from_json(json)
# print the JSON string representation of the object
print(AckOrResolveRequest.to_json())

# convert the object into a dict
ack_or_resolve_request_dict = ack_or_resolve_request_instance.to_dict()
# create an instance of AckOrResolveRequest from a dict
ack_or_resolve_request_from_dict = AckOrResolveRequest.from_dict(ack_or_resolve_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


