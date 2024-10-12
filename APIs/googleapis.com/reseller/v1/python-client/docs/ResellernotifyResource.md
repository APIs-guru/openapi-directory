# ResellernotifyResource

JSON template for resellernotify response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_name** | **str** | Topic name of the PubSub | [optional] 

## Example

```python
from openapi_client.models.resellernotify_resource import ResellernotifyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ResellernotifyResource from a JSON string
resellernotify_resource_instance = ResellernotifyResource.from_json(json)
# print the JSON string representation of the object
print(ResellernotifyResource.to_json())

# convert the object into a dict
resellernotify_resource_dict = resellernotify_resource_instance.to_dict()
# create an instance of ResellernotifyResource from a dict
resellernotify_resource_from_dict = ResellernotifyResource.from_dict(resellernotify_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


