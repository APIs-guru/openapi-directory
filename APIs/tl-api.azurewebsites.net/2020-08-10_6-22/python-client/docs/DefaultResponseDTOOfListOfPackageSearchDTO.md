# DefaultResponseDTOOfListOfPackageSearchDTO

The DefaultResponseDTO Class. Contains fields of DefaultResponse DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_exception** | **object** |  | [optional] 
**result** | [**List[PackageSearchDTO]**](PackageSearchDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_list_of_package_search_dto import DefaultResponseDTOOfListOfPackageSearchDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfListOfPackageSearchDTO from a JSON string
default_response_dtoof_list_of_package_search_dto_instance = DefaultResponseDTOOfListOfPackageSearchDTO.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfListOfPackageSearchDTO.to_json())

# convert the object into a dict
default_response_dtoof_list_of_package_search_dto_dict = default_response_dtoof_list_of_package_search_dto_instance.to_dict()
# create an instance of DefaultResponseDTOOfListOfPackageSearchDTO from a dict
default_response_dtoof_list_of_package_search_dto_from_dict = DefaultResponseDTOOfListOfPackageSearchDTO.from_dict(default_response_dtoof_list_of_package_search_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


