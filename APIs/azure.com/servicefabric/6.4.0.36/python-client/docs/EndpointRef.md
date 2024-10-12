# EndpointRef

Describes a reference to a service endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the endpoint. | [optional] 

## Example

```python
from openapi_client.models.endpoint_ref import EndpointRef

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointRef from a JSON string
endpoint_ref_instance = EndpointRef.from_json(json)
# print the JSON string representation of the object
print(EndpointRef.to_json())

# convert the object into a dict
endpoint_ref_dict = endpoint_ref_instance.to_dict()
# create an instance of EndpointRef from a dict
endpoint_ref_from_dict = EndpointRef.from_dict(endpoint_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


