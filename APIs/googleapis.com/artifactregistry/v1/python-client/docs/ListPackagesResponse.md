# ListPackagesResponse

The response from listing packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to retrieve the next page of packages, or empty if there are no more packages to return. | [optional] 
**packages** | [**List[Package]**](Package.md) | The packages returned. | [optional] 

## Example

```python
from openapi_client.models.list_packages_response import ListPackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPackagesResponse from a JSON string
list_packages_response_instance = ListPackagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPackagesResponse.to_json())

# convert the object into a dict
list_packages_response_dict = list_packages_response_instance.to_dict()
# create an instance of ListPackagesResponse from a dict
list_packages_response_from_dict = ListPackagesResponse.from_dict(list_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


