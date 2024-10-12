# SearchResourcesRequest

Request to search the resources in the specified FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Required. The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). | [optional] 

## Example

```python
from openapi_client.models.search_resources_request import SearchResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResourcesRequest from a JSON string
search_resources_request_instance = SearchResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(SearchResourcesRequest.to_json())

# convert the object into a dict
search_resources_request_dict = search_resources_request_instance.to_dict()
# create an instance of SearchResourcesRequest from a dict
search_resources_request_from_dict = SearchResourcesRequest.from_dict(search_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


