# PhotoVisibility


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isfamily** | **bool** |  | [optional] 
**isfriend** | **bool** |  | [optional] 
**ispublic** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.photo_visibility import PhotoVisibility

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoVisibility from a JSON string
photo_visibility_instance = PhotoVisibility.from_json(json)
# print the JSON string representation of the object
print(PhotoVisibility.to_json())

# convert the object into a dict
photo_visibility_dict = photo_visibility_instance.to_dict()
# create an instance of PhotoVisibility from a dict
photo_visibility_from_dict = PhotoVisibility.from_dict(photo_visibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


