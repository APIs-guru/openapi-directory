# APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsPackageTypeIDtoBundle]**](UpdateSystemModelsPackageTypeIDtoBundle.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_package_type_i_dto_bundle import APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle from a JSON string
api_paged_response_update_system_models_package_type_i_dto_bundle_instance = APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle.to_json())

# convert the object into a dict
api_paged_response_update_system_models_package_type_i_dto_bundle_dict = api_paged_response_update_system_models_package_type_i_dto_bundle_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle from a dict
api_paged_response_update_system_models_package_type_i_dto_bundle_from_dict = APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle.from_dict(api_paged_response_update_system_models_package_type_i_dto_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


