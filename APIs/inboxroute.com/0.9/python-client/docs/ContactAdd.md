# ContactAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **datetime** | Date+time subscriber confirmed his/her list opt-in | [optional] 
**customfields** | **object** | Dictionnary of field key to value | [optional] 
**email** | **str** | Email address | 
**ip** | **str** | Subscriber&#39;s IP address when he/she confirmed list opt-in | [optional] 
**listid** | **str** | Unique 16 characters ID of the list owner | 
**status** | **int** | Status (   1- Active,   2- Unconfirmed,   3- Unsubscribed,   4- Deleted,   5- Cleaned because of hard bounce or spam complaint)  | [optional] 

## Example

```python
from openapi_client.models.contact_add import ContactAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ContactAdd from a JSON string
contact_add_instance = ContactAdd.from_json(json)
# print the JSON string representation of the object
print(ContactAdd.to_json())

# convert the object into a dict
contact_add_dict = contact_add_instance.to_dict()
# create an instance of ContactAdd from a dict
contact_add_from_dict = ContactAdd.from_dict(contact_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


