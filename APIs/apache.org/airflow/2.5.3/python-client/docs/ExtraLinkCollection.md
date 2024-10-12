# ExtraLinkCollection

The collection of extra links.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra_links** | [**List[ExtraLink]**](ExtraLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.extra_link_collection import ExtraLinkCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ExtraLinkCollection from a JSON string
extra_link_collection_instance = ExtraLinkCollection.from_json(json)
# print the JSON string representation of the object
print(ExtraLinkCollection.to_json())

# convert the object into a dict
extra_link_collection_dict = extra_link_collection_instance.to_dict()
# create an instance of ExtraLinkCollection from a dict
extra_link_collection_from_dict = ExtraLinkCollection.from_dict(extra_link_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


