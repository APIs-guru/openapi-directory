# ContactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**email** | **str** | The email of the legal company entity.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**name** | **str** | A name of a person or an organisation | [optional] 
**telephone** | **str** | The telephone number in E.164 Phone Number Formatting | [optional] 

## Example

```python
from openapi_client.models.contact_request import ContactRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ContactRequest from a JSON string
contact_request_instance = ContactRequest.from_json(json)
# print the JSON string representation of the object
print(ContactRequest.to_json())

# convert the object into a dict
contact_request_dict = contact_request_instance.to_dict()
# create an instance of ContactRequest from a dict
contact_request_from_dict = ContactRequest.from_dict(contact_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


