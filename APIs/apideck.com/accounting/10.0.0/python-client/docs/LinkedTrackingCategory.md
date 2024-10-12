# LinkedTrackingCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for the tracking category. | [optional] 
**name** | **str** | The name of the tracking category. | [optional] 

## Example

```python
from openapi_client.models.linked_tracking_category import LinkedTrackingCategory

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedTrackingCategory from a JSON string
linked_tracking_category_instance = LinkedTrackingCategory.from_json(json)
# print the JSON string representation of the object
print(LinkedTrackingCategory.to_json())

# convert the object into a dict
linked_tracking_category_dict = linked_tracking_category_instance.to_dict()
# create an instance of LinkedTrackingCategory from a dict
linked_tracking_category_from_dict = LinkedTrackingCategory.from_dict(linked_tracking_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


