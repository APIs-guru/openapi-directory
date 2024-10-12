# ListFhirStoresResponse

Lists the FHIR stores in the given dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fhir_stores** | [**List[FhirStore]**](FhirStore.md) | The returned FHIR stores. Won&#39;t be more FHIR stores than the value of page_size in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_fhir_stores_response import ListFhirStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFhirStoresResponse from a JSON string
list_fhir_stores_response_instance = ListFhirStoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListFhirStoresResponse.to_json())

# convert the object into a dict
list_fhir_stores_response_dict = list_fhir_stores_response_instance.to_dict()
# create an instance of ListFhirStoresResponse from a dict
list_fhir_stores_response_from_dict = ListFhirStoresResponse.from_dict(list_fhir_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


