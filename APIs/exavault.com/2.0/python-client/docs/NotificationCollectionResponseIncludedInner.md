# NotificationCollectionResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ResourceAttributes**](ResourceAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**relationships** | [**ResourceRelationships**](ResourceRelationships.md) |  | [optional] 
**type** | **str** | Type of object being returned. Always \&quot;user\&quot; | [optional] 

## Example

```python
from openapi_client.models.notification_collection_response_included_inner import NotificationCollectionResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationCollectionResponseIncludedInner from a JSON string
notification_collection_response_included_inner_instance = NotificationCollectionResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(NotificationCollectionResponseIncludedInner.to_json())

# convert the object into a dict
notification_collection_response_included_inner_dict = notification_collection_response_included_inner_instance.to_dict()
# create an instance of NotificationCollectionResponseIncludedInner from a dict
notification_collection_response_included_inner_from_dict = NotificationCollectionResponseIncludedInner.from_dict(notification_collection_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


