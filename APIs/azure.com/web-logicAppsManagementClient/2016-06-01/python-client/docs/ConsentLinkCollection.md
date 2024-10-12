# ConsentLinkCollection

Collection of consent links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConsentLinkDefinition]**](ConsentLinkDefinition.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.consent_link_collection import ConsentLinkCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkCollection from a JSON string
consent_link_collection_instance = ConsentLinkCollection.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkCollection.to_json())

# convert the object into a dict
consent_link_collection_dict = consent_link_collection_instance.to_dict()
# create an instance of ConsentLinkCollection from a dict
consent_link_collection_from_dict = ConsentLinkCollection.from_dict(consent_link_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


