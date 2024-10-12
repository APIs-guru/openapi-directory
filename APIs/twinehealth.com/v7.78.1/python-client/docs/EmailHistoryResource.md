# EmailHistoryResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**EmailHistoryResourceAttributes**](EmailHistoryResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**EmailHistoryResourceRelationships**](EmailHistoryResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.email_history_resource import EmailHistoryResource

# TODO update the JSON string below
json = "{}"
# create an instance of EmailHistoryResource from a JSON string
email_history_resource_instance = EmailHistoryResource.from_json(json)
# print the JSON string representation of the object
print(EmailHistoryResource.to_json())

# convert the object into a dict
email_history_resource_dict = email_history_resource_instance.to_dict()
# create an instance of EmailHistoryResource from a dict
email_history_resource_from_dict = EmailHistoryResource.from_dict(email_history_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


