# PropertyMetadata

The metadata associated with a property, including the property's name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type_id** | **str** | The property&#39;s custom type id. Using this property, the user is able to tag the type of the value of the property. | [optional] 
**last_modified_utc_timestamp** | **datetime** | Represents when the Property was last modified. Only write operations will cause this field to be updated. | [optional] 
**parent** | **str** | The Service Fabric name, including the &#39;fabric:&#39; URI scheme. | [optional] 
**sequence_number** | **str** | The version of the property. Every time a property is modified, its sequence number is increased. | [optional] 
**size_in_bytes** | **int** | The length of the serialized property value. | [optional] 
**type_id** | [**PropertyValueKind**](PropertyValueKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_metadata import PropertyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyMetadata from a JSON string
property_metadata_instance = PropertyMetadata.from_json(json)
# print the JSON string representation of the object
print(PropertyMetadata.to_json())

# convert the object into a dict
property_metadata_dict = property_metadata_instance.to_dict()
# create an instance of PropertyMetadata from a dict
property_metadata_from_dict = PropertyMetadata.from_dict(property_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


