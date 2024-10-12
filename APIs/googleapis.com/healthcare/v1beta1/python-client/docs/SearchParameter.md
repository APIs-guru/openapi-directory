# SearchParameter

Contains the versioned name and the URL for one SearchParameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_url** | **str** | The canonical url of the search parameter resource. | [optional] 
**parameter** | **str** | The versioned name of the search parameter resource. The format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/_history/{version-id} For fhir stores with disable_resource_versioning&#x3D;true, the format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/ | [optional] 

## Example

```python
from openapi_client.models.search_parameter import SearchParameter

# TODO update the JSON string below
json = "{}"
# create an instance of SearchParameter from a JSON string
search_parameter_instance = SearchParameter.from_json(json)
# print the JSON string representation of the object
print(SearchParameter.to_json())

# convert the object into a dict
search_parameter_dict = search_parameter_instance.to_dict()
# create an instance of SearchParameter from a dict
search_parameter_from_dict = SearchParameter.from_dict(search_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


