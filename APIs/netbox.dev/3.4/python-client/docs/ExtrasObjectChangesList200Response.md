# ExtrasObjectChangesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ObjectChange]**](ObjectChange.md) |  | 

## Example

```python
from openapi_client.models.extras_object_changes_list200_response import ExtrasObjectChangesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasObjectChangesList200Response from a JSON string
extras_object_changes_list200_response_instance = ExtrasObjectChangesList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasObjectChangesList200Response.to_json())

# convert the object into a dict
extras_object_changes_list200_response_dict = extras_object_changes_list200_response_instance.to_dict()
# create an instance of ExtrasObjectChangesList200Response from a dict
extras_object_changes_list200_response_from_dict = ExtrasObjectChangesList200Response.from_dict(extras_object_changes_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


