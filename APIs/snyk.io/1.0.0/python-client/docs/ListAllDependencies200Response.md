# ListAllDependencies200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ListAllDependencies200ResponseResultsInner]**](ListAllDependencies200ResponseResultsInner.md) | A list of issues | 
**total** | **float** | The number of results returned | [optional] 

## Example

```python
from openapi_client.models.list_all_dependencies200_response import ListAllDependencies200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllDependencies200Response from a JSON string
list_all_dependencies200_response_instance = ListAllDependencies200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllDependencies200Response.to_json())

# convert the object into a dict
list_all_dependencies200_response_dict = list_all_dependencies200_response_instance.to_dict()
# create an instance of ListAllDependencies200Response from a dict
list_all_dependencies200_response_from_dict = ListAllDependencies200Response.from_dict(list_all_dependencies200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


