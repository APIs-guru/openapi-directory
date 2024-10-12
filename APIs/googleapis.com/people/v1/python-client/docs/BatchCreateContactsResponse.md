# BatchCreateContactsResponse

If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_people** | [**List[PersonResponse]**](PersonResponse.md) | The contacts that were created, unless the request &#x60;read_mask&#x60; is empty. | [optional] 

## Example

```python
from openapi_client.models.batch_create_contacts_response import BatchCreateContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateContactsResponse from a JSON string
batch_create_contacts_response_instance = BatchCreateContactsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateContactsResponse.to_json())

# convert the object into a dict
batch_create_contacts_response_dict = batch_create_contacts_response_instance.to_dict()
# create an instance of BatchCreateContactsResponse from a dict
batch_create_contacts_response_from_dict = BatchCreateContactsResponse.from_dict(batch_create_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


