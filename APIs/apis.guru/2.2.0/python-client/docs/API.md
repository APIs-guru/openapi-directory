# API

Meta information about API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **datetime** | Timestamp when the API was first added to the directory | 
**preferred** | **str** | Recommended version | 
**versions** | [**Dict[str, ApiVersion]**](ApiVersion.md) | List of supported versions of the API | 

## Example

```python
from openapi_client.models.api import API

# TODO update the JSON string below
json = "{}"
# create an instance of API from a JSON string
api_instance = API.from_json(json)
# print the JSON string representation of the object
print(API.to_json())

# convert the object into a dict
api_dict = api_instance.to_dict()
# create an instance of API from a dict
api_from_dict = API.from_dict(api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


