# PhotoUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canblog** | **bool** |  | [optional] 
**candownload** | **bool** |  | [optional] 
**canprint** | **bool** |  | [optional] 
**canshare** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.photo_usage import PhotoUsage

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoUsage from a JSON string
photo_usage_instance = PhotoUsage.from_json(json)
# print the JSON string representation of the object
print(PhotoUsage.to_json())

# convert the object into a dict
photo_usage_dict = photo_usage_instance.to_dict()
# create an instance of PhotoUsage from a dict
photo_usage_from_dict = PhotoUsage.from_dict(photo_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


