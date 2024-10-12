# ListPackageTypesResponseBody

A list package types response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[PackageType]**](PackageType.md) | An array of custom package types | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_package_types_response_body import ListPackageTypesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListPackageTypesResponseBody from a JSON string
list_package_types_response_body_instance = ListPackageTypesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListPackageTypesResponseBody.to_json())

# convert the object into a dict
list_package_types_response_body_dict = list_package_types_response_body_instance.to_dict()
# create an instance of ListPackageTypesResponseBody from a dict
list_package_types_response_body_from_dict = ListPackageTypesResponseBody.from_dict(list_package_types_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


