# VenuesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_labels** | **List[str]** | Array of alternative/old names of the venue. | [optional] 
**city** | **str** | City in which the venue is. | 
**country_code** | **str** | Country in which the venue is (&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3&#39;&gt;ISO 3166-1 alpha-3 code&lt;/a&gt;). | 
**creation_timestamp** | **int** | Timestamp for when the venue was created in the customer&#39;s database. | 
**first_address** | **str** | First address field of the venue. | 
**id** | **int** | Unique ID of the venue. | 
**label** | **str** | Name of the venue. | 
**last_update_timestamp** | **int** | Timestamp for when the venue was last updated in the customer&#39;s database. | 
**major_city** | **str** | Major city or metropolitan area the venue belongs to. | 
**second_address** | **str** | Second address field of the venue. | 
**type** | [**VenuesEntityType**](VenuesEntityType.md) |  | 
**zip_code** | **str** | ZIP code of the venue. | 

## Example

```python
from openapi_client.models.venues_entity import VenuesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of VenuesEntity from a JSON string
venues_entity_instance = VenuesEntity.from_json(json)
# print the JSON string representation of the object
print(VenuesEntity.to_json())

# convert the object into a dict
venues_entity_dict = venues_entity_instance.to_dict()
# create an instance of VenuesEntity from a dict
venues_entity_from_dict = VenuesEntity.from_dict(venues_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


