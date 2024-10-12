# EndpointVBCExtension

Connect to a VBC extension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** |  | 
**type** | **str** | The type of connection. Must be &#x60;vbc&#x60; | 

## Example

```python
from openapi_client.models.endpoint_vbc_extension import EndpointVBCExtension

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointVBCExtension from a JSON string
endpoint_vbc_extension_instance = EndpointVBCExtension.from_json(json)
# print the JSON string representation of the object
print(EndpointVBCExtension.to_json())

# convert the object into a dict
endpoint_vbc_extension_dict = endpoint_vbc_extension_instance.to_dict()
# create an instance of EndpointVBCExtension from a dict
endpoint_vbc_extension_from_dict = EndpointVBCExtension.from_dict(endpoint_vbc_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


