# FacetError

A facet whose execution resulted in an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorDetails]**](ErrorDetails.md) | An array containing detected facet errors with details. | 

## Example

```python
from openapi_client.models.facet_error import FacetError

# TODO update the JSON string below
json = "{}"
# create an instance of FacetError from a JSON string
facet_error_instance = FacetError.from_json(json)
# print the JSON string representation of the object
print(FacetError.to_json())

# convert the object into a dict
facet_error_dict = facet_error_instance.to_dict()
# create an instance of FacetError from a dict
facet_error_from_dict = FacetError.from_dict(facet_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


