# TagProperty

A tag of the LegalHold of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_identifier** | **str** | Returns the Object ID of the user who added the tag. | [optional] [readonly] 
**tag** | **str** | The tag value. | [optional] [readonly] 
**tenant_id** | **str** | Returns the Tenant ID that issued the token for the user who added the tag. | [optional] [readonly] 
**timestamp** | **datetime** | Returns the date and time the tag was added. | [optional] [readonly] 
**upn** | **str** | Returns the User Principal Name of the user who added the tag. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_property import TagProperty

# TODO update the JSON string below
json = "{}"
# create an instance of TagProperty from a JSON string
tag_property_instance = TagProperty.from_json(json)
# print the JSON string representation of the object
print(TagProperty.to_json())

# convert the object into a dict
tag_property_dict = tag_property_instance.to_dict()
# create an instance of TagProperty from a dict
tag_property_from_dict = TagProperty.from_dict(tag_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


