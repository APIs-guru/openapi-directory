# DefaultResponseDTOOfPackageSearchDTO

The DefaultResponseDTO Class. Contains fields of DefaultResponse DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_exception** | **object** |  | [optional] 
**result** | [**DefaultResponseDTOOfPackageSearchDTOResult**](DefaultResponseDTOOfPackageSearchDTOResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_package_search_dto import DefaultResponseDTOOfPackageSearchDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfPackageSearchDTO from a JSON string
default_response_dtoof_package_search_dto_instance = DefaultResponseDTOOfPackageSearchDTO.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfPackageSearchDTO.to_json())

# convert the object into a dict
default_response_dtoof_package_search_dto_dict = default_response_dtoof_package_search_dto_instance.to_dict()
# create an instance of DefaultResponseDTOOfPackageSearchDTO from a dict
default_response_dtoof_package_search_dto_from_dict = DefaultResponseDTOOfPackageSearchDTO.from_dict(default_response_dtoof_package_search_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


