# APIPagedResponseUpdateSystemModelsPackageStatusSummary

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsPackageStatusSummary]**](UpdateSystemModelsPackageStatusSummary.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_package_status_summary import APIPagedResponseUpdateSystemModelsPackageStatusSummary

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsPackageStatusSummary from a JSON string
api_paged_response_update_system_models_package_status_summary_instance = APIPagedResponseUpdateSystemModelsPackageStatusSummary.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsPackageStatusSummary.to_json())

# convert the object into a dict
api_paged_response_update_system_models_package_status_summary_dict = api_paged_response_update_system_models_package_status_summary_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsPackageStatusSummary from a dict
api_paged_response_update_system_models_package_status_summary_from_dict = APIPagedResponseUpdateSystemModelsPackageStatusSummary.from_dict(api_paged_response_update_system_models_package_status_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


