# ExtrasConfigContextsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ConfigContext]**](ConfigContext.md) |  | 

## Example

```python
from openapi_client.models.extras_config_contexts_list200_response import ExtrasConfigContextsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasConfigContextsList200Response from a JSON string
extras_config_contexts_list200_response_instance = ExtrasConfigContextsList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasConfigContextsList200Response.to_json())

# convert the object into a dict
extras_config_contexts_list200_response_dict = extras_config_contexts_list200_response_instance.to_dict()
# create an instance of ExtrasConfigContextsList200Response from a dict
extras_config_contexts_list200_response_from_dict = ExtrasConfigContextsList200Response.from_dict(extras_config_contexts_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


