# Client

A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed. | [optional] 
**name** | **str** | Output only. The resource name of the client. Format: &#x60;buyers/{accountId}/clients/{clientAccountId}&#x60; | [optional] [readonly] 
**partner_client_id** | **str** | Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients. | [optional] 
**role** | **str** | Required. The role assigned to the client. Each role implies a set of permissions granted to the client. | [optional] 
**seller_visible** | **bool** | Whether the client will be visible to sellers. | [optional] 
**state** | **str** | Output only. The state of the client. | [optional] [readonly] 

## Example

```python
from openapi_client.models.client import Client

# TODO update the JSON string below
json = "{}"
# create an instance of Client from a JSON string
client_instance = Client.from_json(json)
# print the JSON string representation of the object
print(Client.to_json())

# convert the object into a dict
client_dict = client_instance.to_dict()
# create an instance of Client from a dict
client_from_dict = Client.from_dict(client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


