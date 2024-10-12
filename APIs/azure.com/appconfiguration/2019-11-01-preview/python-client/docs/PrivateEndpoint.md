# PrivateEndpoint

Private endpoint which a connection belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource Id for private endpoint | [optional] 

## Example

```python
from openapi_client.models.private_endpoint import PrivateEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpoint from a JSON string
private_endpoint_instance = PrivateEndpoint.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpoint.to_json())

# convert the object into a dict
private_endpoint_dict = private_endpoint_instance.to_dict()
# create an instance of PrivateEndpoint from a dict
private_endpoint_from_dict = PrivateEndpoint.from_dict(private_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


