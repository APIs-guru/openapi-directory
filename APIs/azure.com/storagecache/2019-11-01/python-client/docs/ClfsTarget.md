# ClfsTarget

Storage container for use as a CLFS Storage Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | A fully qualified URL. | [optional] 

## Example

```python
from openapi_client.models.clfs_target import ClfsTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ClfsTarget from a JSON string
clfs_target_instance = ClfsTarget.from_json(json)
# print the JSON string representation of the object
print(ClfsTarget.to_json())

# convert the object into a dict
clfs_target_dict = clfs_target_instance.to_dict()
# create an instance of ClfsTarget from a dict
clfs_target_from_dict = ClfsTarget.from_dict(clfs_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


