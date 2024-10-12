# ListPythonPackagesResponse

The response from listing python packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. | [optional] 
**python_packages** | [**List[PythonPackage]**](PythonPackage.md) | The python packages returned. | [optional] 

## Example

```python
from openapi_client.models.list_python_packages_response import ListPythonPackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPythonPackagesResponse from a JSON string
list_python_packages_response_instance = ListPythonPackagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPythonPackagesResponse.to_json())

# convert the object into a dict
list_python_packages_response_dict = list_python_packages_response_instance.to_dict()
# create an instance of ListPythonPackagesResponse from a dict
list_python_packages_response_from_dict = ListPythonPackagesResponse.from_dict(list_python_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


