# EndpointHeadersPatchIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** |  | 

## Example

```python
from openapi_client.models.endpoint_headers_patch_in import EndpointHeadersPatchIn

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHeadersPatchIn from a JSON string
endpoint_headers_patch_in_instance = EndpointHeadersPatchIn.from_json(json)
# print the JSON string representation of the object
print(EndpointHeadersPatchIn.to_json())

# convert the object into a dict
endpoint_headers_patch_in_dict = endpoint_headers_patch_in_instance.to_dict()
# create an instance of EndpointHeadersPatchIn from a dict
endpoint_headers_patch_in_from_dict = EndpointHeadersPatchIn.from_dict(endpoint_headers_patch_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


