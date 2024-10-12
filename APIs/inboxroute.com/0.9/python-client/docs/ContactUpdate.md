# ContactUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **datetime** | Date+time subscriber confirmed his/her list opt-in | [optional] 
**customfields** | **object** | Dictionnary of field key to value | [optional] 
**email** | **str** | Email address | [optional] 
**ip** | **str** | Subscriber&#39;s IP address when he/she confirmed list opt-in | [optional] 
**status** | **int** | Status (   1- Active,   2- Unconfirmed,   3- Unsubscribed,   4- Deleted,   5- Cleaned because of hard bounce or spam complaint)  | [optional] 

## Example

```python
from openapi_client.models.contact_update import ContactUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ContactUpdate from a JSON string
contact_update_instance = ContactUpdate.from_json(json)
# print the JSON string representation of the object
print(ContactUpdate.to_json())

# convert the object into a dict
contact_update_dict = contact_update_instance.to_dict()
# create an instance of ContactUpdate from a dict
contact_update_from_dict = ContactUpdate.from_dict(contact_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


