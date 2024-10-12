# GetTemplates403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error description | [optional] 
**status** | **int** | HTTP Error code | [optional] 

## Example

```python
from openapi_client.models.get_templates403_response import GetTemplates403Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTemplates403Response from a JSON string
get_templates403_response_instance = GetTemplates403Response.from_json(json)
# print the JSON string representation of the object
print(GetTemplates403Response.to_json())

# convert the object into a dict
get_templates403_response_dict = get_templates403_response_instance.to_dict()
# create an instance of GetTemplates403Response from a dict
get_templates403_response_from_dict = GetTemplates403Response.from_dict(get_templates403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


