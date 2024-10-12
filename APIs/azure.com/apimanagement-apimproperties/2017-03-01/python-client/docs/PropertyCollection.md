# PropertyCollection

Paged Property list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of entities | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[PropertyContract]**](PropertyContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.property_collection import PropertyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyCollection from a JSON string
property_collection_instance = PropertyCollection.from_json(json)
# print the JSON string representation of the object
print(PropertyCollection.to_json())

# convert the object into a dict
property_collection_dict = property_collection_instance.to_dict()
# create an instance of PropertyCollection from a dict
property_collection_from_dict = PropertyCollection.from_dict(property_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


