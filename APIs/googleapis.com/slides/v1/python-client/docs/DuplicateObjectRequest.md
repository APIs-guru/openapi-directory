# DuplicateObjectRequest

Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The ID of the object to duplicate. | [optional] 
**object_ids** | **Dict[str, str]** | The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object&#39;s duplicate may be specified in this map as well, using the same value of the &#x60;object_id&#x60; field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID. | [optional] 

## Example

```python
from openapi_client.models.duplicate_object_request import DuplicateObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateObjectRequest from a JSON string
duplicate_object_request_instance = DuplicateObjectRequest.from_json(json)
# print the JSON string representation of the object
print(DuplicateObjectRequest.to_json())

# convert the object into a dict
duplicate_object_request_dict = duplicate_object_request_instance.to_dict()
# create an instance of DuplicateObjectRequest from a dict
duplicate_object_request_from_dict = DuplicateObjectRequest.from_dict(duplicate_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


