# ActivityContentDetailsBulletin

Details about a channel bulletin post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_bulletin import ActivityContentDetailsBulletin

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsBulletin from a JSON string
activity_content_details_bulletin_instance = ActivityContentDetailsBulletin.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsBulletin.to_json())

# convert the object into a dict
activity_content_details_bulletin_dict = activity_content_details_bulletin_instance.to_dict()
# create an instance of ActivityContentDetailsBulletin from a dict
activity_content_details_bulletin_from_dict = ActivityContentDetailsBulletin.from_dict(activity_content_details_bulletin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


