# PartnerStoreCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aff** | **str** | Partner code. | [optional] 
**email** | **str** | New Store administrator email. | [optional] 
**locale** | **str** | ISO3166-2 code for the store langauge. | [optional] [default to 'en']
**password** | **str** | New Store administrator password. | [optional] 
**plan_name** | **str** | New Store plan name. | [optional] [default to 'pro']
**reject_duplicates** | **bool** | Indicates whether the request should fail if the Store name provided is already in use. | [optional] [default to False]
**store_name** | **str** | New Store name. | [optional] 

## Example

```python
from openapi_client.models.partner_store_create import PartnerStoreCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerStoreCreate from a JSON string
partner_store_create_instance = PartnerStoreCreate.from_json(json)
# print the JSON string representation of the object
print(PartnerStoreCreate.to_json())

# convert the object into a dict
partner_store_create_dict = partner_store_create_instance.to_dict()
# create an instance of PartnerStoreCreate from a dict
partner_store_create_from_dict = PartnerStoreCreate.from_dict(partner_store_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


