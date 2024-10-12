# Bookshelves


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Bookshelf]**](Bookshelf.md) | A list of bookshelves. | [optional] 
**kind** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.bookshelves import Bookshelves

# TODO update the JSON string below
json = "{}"
# create an instance of Bookshelves from a JSON string
bookshelves_instance = Bookshelves.from_json(json)
# print the JSON string representation of the object
print(Bookshelves.to_json())

# convert the object into a dict
bookshelves_dict = bookshelves_instance.to_dict()
# create an instance of Bookshelves from a dict
bookshelves_from_dict = Bookshelves.from_dict(bookshelves_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


