# ContactEnrichPostRequestAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** |  | [optional] 
**address_line2** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_enrich_post_request_address import ContactEnrichPostRequestAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ContactEnrichPostRequestAddress from a JSON string
contact_enrich_post_request_address_instance = ContactEnrichPostRequestAddress.from_json(json)
# print the JSON string representation of the object
print(ContactEnrichPostRequestAddress.to_json())

# convert the object into a dict
contact_enrich_post_request_address_dict = contact_enrich_post_request_address_instance.to_dict()
# create an instance of ContactEnrichPostRequestAddress from a dict
contact_enrich_post_request_address_from_dict = ContactEnrichPostRequestAddress.from_dict(contact_enrich_post_request_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


