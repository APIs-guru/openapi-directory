# Screenshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** |  | [optional] 
**file** | [**File**](File.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**translations** | [**List[Translation]**](Translation.md) |  | [optional] 

## Example

```python
from openapi_client.models.screenshot import Screenshot

# TODO update the JSON string below
json = "{}"
# create an instance of Screenshot from a JSON string
screenshot_instance = Screenshot.from_json(json)
# print the JSON string representation of the object
print(Screenshot.to_json())

# convert the object into a dict
screenshot_dict = screenshot_instance.to_dict()
# create an instance of Screenshot from a dict
screenshot_from_dict = Screenshot.from_dict(screenshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


