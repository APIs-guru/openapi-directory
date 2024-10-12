# TagDetails

Tag details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**TagCount**](TagCount.md) |  | [optional] 
**id** | **str** | The tag ID. | [optional] [readonly] 
**tag_name** | **str** | The tag name. | [optional] 
**values** | [**List[TagValue]**](TagValue.md) | The list of tag values. | [optional] 

## Example

```python
from openapi_client.models.tag_details import TagDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TagDetails from a JSON string
tag_details_instance = TagDetails.from_json(json)
# print the JSON string representation of the object
print(TagDetails.to_json())

# convert the object into a dict
tag_details_dict = tag_details_instance.to_dict()
# create an instance of TagDetails from a dict
tag_details_from_dict = TagDetails.from_dict(tag_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


