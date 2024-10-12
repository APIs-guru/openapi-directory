# NotificationCollectionResponse

Response object for notifications collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Notification]**](Notification.md) |  | [optional] 
**included** | [**List[NotificationCollectionResponseIncludedInner]**](NotificationCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 
**returned_results** | **int** | Number of returned results. | [optional] 
**total_results** | **int** | Total results found.  | [optional] 

## Example

```python
from openapi_client.models.notification_collection_response import NotificationCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationCollectionResponse from a JSON string
notification_collection_response_instance = NotificationCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationCollectionResponse.to_json())

# convert the object into a dict
notification_collection_response_dict = notification_collection_response_instance.to_dict()
# create an instance of NotificationCollectionResponse from a dict
notification_collection_response_from_dict = NotificationCollectionResponse.from_dict(notification_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


