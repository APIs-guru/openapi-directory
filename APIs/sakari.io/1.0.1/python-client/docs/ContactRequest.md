# ContactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**mobile** | [**ContactIdentifiersMobile**](ContactIdentifiersMobile.md) |  | [optional] 
**attributes** | **object** |  | [optional] 
**tags** | [**List[Tag]**](Tag.md) |  | [optional] 

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


