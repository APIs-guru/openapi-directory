# PropertyList

A collection of properties, key-value pairs that are either public or private to an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[ModelProperty]**](ModelProperty.md) | The list of properties. | [optional] 
**kind** | **str** | This is always &#x60;drive#propertyList&#x60;. | [optional] [default to 'drive#propertyList']
**self_link** | **str** | The link back to this list. | [optional] 

## Example

```python
from openapi_client.models.property_list import PropertyList

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyList from a JSON string
property_list_instance = PropertyList.from_json(json)
# print the JSON string representation of the object
print(PropertyList.to_json())

# convert the object into a dict
property_list_dict = property_list_instance.to_dict()
# create an instance of PropertyList from a dict
property_list_from_dict = PropertyList.from_dict(property_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


