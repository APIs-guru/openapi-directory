# ReferenceEntities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AssetFamiliesAllOfLinks**](AssetFamiliesAllOfLinks.md) |  | [optional] 
**embedded** | [**ReferenceEntitiesAllOfEmbedded**](ReferenceEntitiesAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entities import ReferenceEntities

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntities from a JSON string
reference_entities_instance = ReferenceEntities.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntities.to_json())

# convert the object into a dict
reference_entities_dict = reference_entities_instance.to_dict()
# create an instance of ReferenceEntities from a dict
reference_entities_from_dict = ReferenceEntities.from_dict(reference_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


