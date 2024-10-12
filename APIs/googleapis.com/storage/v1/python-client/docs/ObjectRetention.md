# ObjectRetention

A collection of object level retention parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The bucket&#39;s object retention mode, can only be Unlocked or Locked. | [optional] 
**retain_until_time** | **datetime** | A time in RFC 3339 format until which object retention protects this object. | [optional] 

## Example

```python
from openapi_client.models.object_retention import ObjectRetention

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectRetention from a JSON string
object_retention_instance = ObjectRetention.from_json(json)
# print the JSON string representation of the object
print(ObjectRetention.to_json())

# convert the object into a dict
object_retention_dict = object_retention_instance.to_dict()
# create an instance of ObjectRetention from a dict
object_retention_from_dict = ObjectRetention.from_dict(object_retention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


