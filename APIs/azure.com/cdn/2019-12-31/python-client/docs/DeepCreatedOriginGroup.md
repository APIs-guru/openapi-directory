# DeepCreatedOriginGroup

The origin group for CDN content which is added when creating a CDN endpoint. Traffic is sent to the origins within the origin group based on origin health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Origin group name which must be unique within the endpoint. | 
**properties** | [**DeepCreatedOriginGroupProperties**](DeepCreatedOriginGroupProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.deep_created_origin_group import DeepCreatedOriginGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DeepCreatedOriginGroup from a JSON string
deep_created_origin_group_instance = DeepCreatedOriginGroup.from_json(json)
# print the JSON string representation of the object
print(DeepCreatedOriginGroup.to_json())

# convert the object into a dict
deep_created_origin_group_dict = deep_created_origin_group_instance.to_dict()
# create an instance of DeepCreatedOriginGroup from a dict
deep_created_origin_group_from_dict = DeepCreatedOriginGroup.from_dict(deep_created_origin_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


