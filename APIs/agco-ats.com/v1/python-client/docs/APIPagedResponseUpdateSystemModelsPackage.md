# APIPagedResponseUpdateSystemModelsPackage

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsPackage]**](UpdateSystemModelsPackage.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_package import APIPagedResponseUpdateSystemModelsPackage

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsPackage from a JSON string
api_paged_response_update_system_models_package_instance = APIPagedResponseUpdateSystemModelsPackage.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsPackage.to_json())

# convert the object into a dict
api_paged_response_update_system_models_package_dict = api_paged_response_update_system_models_package_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsPackage from a dict
api_paged_response_update_system_models_package_from_dict = APIPagedResponseUpdateSystemModelsPackage.from_dict(api_paged_response_update_system_models_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


