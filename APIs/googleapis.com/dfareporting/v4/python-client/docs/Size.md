# Size

Represents the dimensions of ads, placements, creatives, or creative assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height of this size. Acceptable values are 0 to 32767, inclusive. | [optional] 
**iab** | **bool** | IAB standard size. This is a read-only, auto-generated field. | [optional] 
**id** | **str** | ID of this size. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#size\&quot;. | [optional] 
**width** | **int** | Width of this size. Acceptable values are 0 to 32767, inclusive. | [optional] 

## Example

```python
from openapi_client.models.size import Size

# TODO update the JSON string below
json = "{}"
# create an instance of Size from a JSON string
size_instance = Size.from_json(json)
# print the JSON string representation of the object
print(Size.to_json())

# convert the object into a dict
size_dict = size_instance.to_dict()
# create an instance of Size from a dict
size_from_dict = Size.from_dict(size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


