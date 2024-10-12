# Objects

A list of objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Object]**](Object.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of objects, this is always storage#objects. | [optional] [default to 'storage#objects']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**prefixes** | **List[str]** | The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter. | [optional] 

## Example

```python
from openapi_client.models.objects import Objects

# TODO update the JSON string below
json = "{}"
# create an instance of Objects from a JSON string
objects_instance = Objects.from_json(json)
# print the JSON string representation of the object
print(Objects.to_json())

# convert the object into a dict
objects_dict = objects_instance.to_dict()
# create an instance of Objects from a dict
objects_from_dict = Objects.from_dict(objects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


