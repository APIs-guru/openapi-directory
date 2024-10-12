# PropertyInfo

Information about a Service Fabric property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**PropertyMetadata**](PropertyMetadata.md) |  | 
**name** | **str** | The name of the Service Fabric property. | 
**value** | [**PropertyValue**](PropertyValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_info import PropertyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyInfo from a JSON string
property_info_instance = PropertyInfo.from_json(json)
# print the JSON string representation of the object
print(PropertyInfo.to_json())

# convert the object into a dict
property_info_dict = property_info_instance.to_dict()
# create an instance of PropertyInfo from a dict
property_info_from_dict = PropertyInfo.from_dict(property_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


