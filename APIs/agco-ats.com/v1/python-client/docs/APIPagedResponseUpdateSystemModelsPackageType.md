# APIPagedResponseUpdateSystemModelsPackageType

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsPackageType]**](UpdateSystemModelsPackageType.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_package_type import APIPagedResponseUpdateSystemModelsPackageType

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsPackageType from a JSON string
api_paged_response_update_system_models_package_type_instance = APIPagedResponseUpdateSystemModelsPackageType.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsPackageType.to_json())

# convert the object into a dict
api_paged_response_update_system_models_package_type_dict = api_paged_response_update_system_models_package_type_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsPackageType from a dict
api_paged_response_update_system_models_package_type_from_dict = APIPagedResponseUpdateSystemModelsPackageType.from_dict(api_paged_response_update_system_models_package_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


