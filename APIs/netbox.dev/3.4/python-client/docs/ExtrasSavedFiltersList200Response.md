# ExtrasSavedFiltersList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[SavedFilter]**](SavedFilter.md) |  | 

## Example

```python
from openapi_client.models.extras_saved_filters_list200_response import ExtrasSavedFiltersList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasSavedFiltersList200Response from a JSON string
extras_saved_filters_list200_response_instance = ExtrasSavedFiltersList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasSavedFiltersList200Response.to_json())

# convert the object into a dict
extras_saved_filters_list200_response_dict = extras_saved_filters_list200_response_instance.to_dict()
# create an instance of ExtrasSavedFiltersList200Response from a dict
extras_saved_filters_list200_response_from_dict = ExtrasSavedFiltersList200Response.from_dict(extras_saved_filters_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


