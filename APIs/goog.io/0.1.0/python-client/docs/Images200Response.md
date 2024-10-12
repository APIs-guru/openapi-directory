# Images200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | **List[str]** |  | [optional] 
**image_results** | [**List[Images200ResponseImageResultsInner]**](Images200ResponseImageResultsInner.md) |  | [optional] 
**results** | **List[object]** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.images200_response import Images200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Images200Response from a JSON string
images200_response_instance = Images200Response.from_json(json)
# print the JSON string representation of the object
print(Images200Response.to_json())

# convert the object into a dict
images200_response_dict = images200_response_instance.to_dict()
# create an instance of Images200Response from a dict
images200_response_from_dict = Images200Response.from_dict(images200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


