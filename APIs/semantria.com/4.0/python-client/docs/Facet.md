# Facet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[Attribute]**](Attribute.md) | Returns the attributes associated with this facet | 
**count** | **int** | The count of occurrences of the facet in the text | 
**label** | **str** | The text of the facet | 
**mentions** | [**List[Mention]**](Mention.md) | Returns genuine forms of facet mentioned across the documents | 
**negative_count** | **int** | The count of negative occurrences of the facet across the documents | 
**neutral_count** | **int** | The count of neutral occurrences of the facet across the documents | 
**positive_count** | **int** | The count of positive occurrences of the facet across the documents | 

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


