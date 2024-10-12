# Client

A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_account_id** | **str** | The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations. | [optional] 
**client_name** | **str** | Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of &#x60;clientName&#x60; and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed. | [optional] 
**entity_id** | **str** | Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file. | [optional] 
**entity_name** | **str** | The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations. | [optional] 
**entity_type** | **str** | An optional field for specifying the type of the client entity: &#x60;ADVERTISER&#x60;, &#x60;BRAND&#x60;, or &#x60;AGENCY&#x60;. | [optional] 
**partner_client_id** | **str** | Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer. | [optional] 
**role** | **str** | The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of &#x60;CLIENT_DEAL_VIEWER&#x60;, &#x60;CLIENT_DEAL_NEGOTIATOR&#x60; or &#x60;CLIENT_DEAL_APPROVER&#x60;. | [optional] 
**status** | **str** | The status of the client buyer. | [optional] 
**visible_to_seller** | **bool** | Whether the client buyer will be visible to sellers. | [optional] 

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


