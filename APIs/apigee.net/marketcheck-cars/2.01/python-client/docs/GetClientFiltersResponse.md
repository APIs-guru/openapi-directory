# GetClientFiltersResponse

A client filters response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | **str** | Description of operation | [optional] 
**status** | **int** | status code of operation | [optional] 

## Example

```python
from openapi_client.models.get_client_filters_response import GetClientFiltersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetClientFiltersResponse from a JSON string
get_client_filters_response_instance = GetClientFiltersResponse.from_json(json)
# print the JSON string representation of the object
print(GetClientFiltersResponse.to_json())

# convert the object into a dict
get_client_filters_response_dict = get_client_filters_response_instance.to_dict()
# create an instance of GetClientFiltersResponse from a dict
get_client_filters_response_from_dict = GetClientFiltersResponse.from_dict(get_client_filters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


