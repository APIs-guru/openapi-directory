# CleanseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**CleanseResponseResult**](CleanseResponseResult.md) |  | 

## Example

```python
from openapi_client.models.cleanse_response import CleanseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CleanseResponse from a JSON string
cleanse_response_instance = CleanseResponse.from_json(json)
# print the JSON string representation of the object
print(CleanseResponse.to_json())

# convert the object into a dict
cleanse_response_dict = cleanse_response_instance.to_dict()
# create an instance of CleanseResponse from a dict
cleanse_response_from_dict = CleanseResponse.from_dict(cleanse_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


