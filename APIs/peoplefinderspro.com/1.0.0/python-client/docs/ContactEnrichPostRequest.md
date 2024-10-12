# ContactEnrichPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ContactEnrichPostRequestAddress**](ContactEnrichPostRequestAddress.md) |  | [optional] 
**age** | **float** |  | [optional] 
**dob** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_enrich_post_request import ContactEnrichPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ContactEnrichPostRequest from a JSON string
contact_enrich_post_request_instance = ContactEnrichPostRequest.from_json(json)
# print the JSON string representation of the object
print(ContactEnrichPostRequest.to_json())

# convert the object into a dict
contact_enrich_post_request_dict = contact_enrich_post_request_instance.to_dict()
# create an instance of ContactEnrichPostRequest from a dict
contact_enrich_post_request_from_dict = ContactEnrichPostRequest.from_dict(contact_enrich_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


