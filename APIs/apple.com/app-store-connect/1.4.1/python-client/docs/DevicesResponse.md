# DevicesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Device]**](Device.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.devices_response import DevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesResponse from a JSON string
devices_response_instance = DevicesResponse.from_json(json)
# print the JSON string representation of the object
print(DevicesResponse.to_json())

# convert the object into a dict
devices_response_dict = devices_response_instance.to_dict()
# create an instance of DevicesResponse from a dict
devices_response_from_dict = DevicesResponse.from_dict(devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


