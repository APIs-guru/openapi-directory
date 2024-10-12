# NewPartnerStoreStore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | New Store code. | [optional] 
**email_partner** | **str** | Partner email. | [optional] 
**name** | **str** | New Store name. | [optional] 
**redirect_url** | **str** | New Store redirect url. | [optional] 

## Example

```python
from openapi_client.models.new_partner_store_store import NewPartnerStoreStore

# TODO update the JSON string below
json = "{}"
# create an instance of NewPartnerStoreStore from a JSON string
new_partner_store_store_instance = NewPartnerStoreStore.from_json(json)
# print the JSON string representation of the object
print(NewPartnerStoreStore.to_json())

# convert the object into a dict
new_partner_store_store_dict = new_partner_store_store_instance.to_dict()
# create an instance of NewPartnerStoreStore from a dict
new_partner_store_store_from_dict = NewPartnerStoreStore.from_dict(new_partner_store_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


