# ListNpmPackagesResponse

The response from listing npm packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. | [optional] 
**npm_packages** | [**List[NpmPackage]**](NpmPackage.md) | The npm packages returned. | [optional] 

## Example

```python
from openapi_client.models.list_npm_packages_response import ListNpmPackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNpmPackagesResponse from a JSON string
list_npm_packages_response_instance = ListNpmPackagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNpmPackagesResponse.to_json())

# convert the object into a dict
list_npm_packages_response_dict = list_npm_packages_response_instance.to_dict()
# create an instance of ListNpmPackagesResponse from a dict
list_npm_packages_response_from_dict = ListNpmPackagesResponse.from_dict(list_npm_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


