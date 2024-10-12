# BoundingBox


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **float** |  | 
**width** | **float** |  | 
**x** | **float** |  | 
**y** | **float** |  | 

## Example

```python
from openapi_client.models.bounding_box import BoundingBox

# TODO update the JSON string below
json = "{}"
# create an instance of BoundingBox from a JSON string
bounding_box_instance = BoundingBox.from_json(json)
# print the JSON string representation of the object
print(BoundingBox.to_json())

# convert the object into a dict
bounding_box_dict = bounding_box_instance.to_dict()
# create an instance of BoundingBox from a dict
bounding_box_from_dict = BoundingBox.from_dict(bounding_box_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


