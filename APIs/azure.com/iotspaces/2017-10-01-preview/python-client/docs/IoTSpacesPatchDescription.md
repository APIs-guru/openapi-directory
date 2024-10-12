# IoTSpacesPatchDescription

The description of the IoTSpaces service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTSpacesProperties**](IoTSpacesProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Instance tags | [optional] 

## Example

```python
from openapi_client.models.io_t_spaces_patch_description import IoTSpacesPatchDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesPatchDescription from a JSON string
io_t_spaces_patch_description_instance = IoTSpacesPatchDescription.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesPatchDescription.to_json())

# convert the object into a dict
io_t_spaces_patch_description_dict = io_t_spaces_patch_description_instance.to_dict()
# create an instance of IoTSpacesPatchDescription from a dict
io_t_spaces_patch_description_from_dict = IoTSpacesPatchDescription.from_dict(io_t_spaces_patch_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


