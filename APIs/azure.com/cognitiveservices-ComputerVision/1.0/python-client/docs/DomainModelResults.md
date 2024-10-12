# DomainModelResults

Result of image analysis using a specific domain model including additional metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the REST API request. | [optional] 
**result** | **object** | Model-specific response | [optional] 

## Example

```python
from openapi_client.models.domain_model_results import DomainModelResults

# TODO update the JSON string below
json = "{}"
# create an instance of DomainModelResults from a JSON string
domain_model_results_instance = DomainModelResults.from_json(json)
# print the JSON string representation of the object
print(DomainModelResults.to_json())

# convert the object into a dict
domain_model_results_dict = domain_model_results_instance.to_dict()
# create an instance of DomainModelResults from a dict
domain_model_results_from_dict = DomainModelResults.from_dict(domain_model_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


