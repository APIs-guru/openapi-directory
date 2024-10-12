# VenuesEntityType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the venue type. | 
**label** | **str** | Label of the venue type. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.venues_entity_type import VenuesEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of VenuesEntityType from a JSON string
venues_entity_type_instance = VenuesEntityType.from_json(json)
# print the JSON string representation of the object
print(VenuesEntityType.to_json())

# convert the object into a dict
venues_entity_type_dict = venues_entity_type_instance.to_dict()
# create an instance of VenuesEntityType from a dict
venues_entity_type_from_dict = VenuesEntityType.from_dict(venues_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


