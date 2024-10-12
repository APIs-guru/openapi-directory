# AssociationsList

List of associations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[Association]**](Association.md) | The array of associations. | [optional] 

## Example

```python
from openapi_client.models.associations_list import AssociationsList

# TODO update the JSON string below
json = "{}"
# create an instance of AssociationsList from a JSON string
associations_list_instance = AssociationsList.from_json(json)
# print the JSON string representation of the object
print(AssociationsList.to_json())

# convert the object into a dict
associations_list_dict = associations_list_instance.to_dict()
# create an instance of AssociationsList from a dict
associations_list_from_dict = AssociationsList.from_dict(associations_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


