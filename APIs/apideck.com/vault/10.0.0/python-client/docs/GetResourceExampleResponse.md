# GetResourceExampleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ResourceExample**](ResourceExample.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_resource_example_response import GetResourceExampleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetResourceExampleResponse from a JSON string
get_resource_example_response_instance = GetResourceExampleResponse.from_json(json)
# print the JSON string representation of the object
print(GetResourceExampleResponse.to_json())

# convert the object into a dict
get_resource_example_response_dict = get_resource_example_response_instance.to_dict()
# create an instance of GetResourceExampleResponse from a dict
get_resource_example_response_from_dict = GetResourceExampleResponse.from_dict(get_resource_example_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


