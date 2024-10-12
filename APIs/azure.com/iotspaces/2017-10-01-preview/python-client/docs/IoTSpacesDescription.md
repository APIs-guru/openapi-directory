# IoTSpacesDescription

The description of the IoTSpaces service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTSpacesProperties**](IoTSpacesProperties.md) |  | [optional] 
**sku** | [**IoTSpacesSkuInfo**](IoTSpacesSkuInfo.md) |  | 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_spaces_description import IoTSpacesDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesDescription from a JSON string
io_t_spaces_description_instance = IoTSpacesDescription.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesDescription.to_json())

# convert the object into a dict
io_t_spaces_description_dict = io_t_spaces_description_instance.to_dict()
# create an instance of IoTSpacesDescription from a dict
io_t_spaces_description_from_dict = IoTSpacesDescription.from_dict(io_t_spaces_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


