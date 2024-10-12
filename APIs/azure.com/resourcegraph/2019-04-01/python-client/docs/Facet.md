# Facet

A facet containing additional statistics on the response of a query. Can be either FacetResult or FacetError.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | Facet expression, same as in the corresponding facet request. | 
**result_type** | **str** | Result type | 

## Example

```python
from openapi_client.models.facet import Facet

# TODO update the JSON string below
json = "{}"
# create an instance of Facet from a JSON string
facet_instance = Facet.from_json(json)
# print the JSON string representation of the object
print(Facet.to_json())

# convert the object into a dict
facet_dict = facet_instance.to_dict()
# create an instance of Facet from a dict
facet_from_dict = Facet.from_dict(facet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


