# OriginGroup

Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OriginGroupProperties**](OriginGroupProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.origin_group import OriginGroup

# TODO update the JSON string below
json = "{}"
# create an instance of OriginGroup from a JSON string
origin_group_instance = OriginGroup.from_json(json)
# print the JSON string representation of the object
print(OriginGroup.to_json())

# convert the object into a dict
origin_group_dict = origin_group_instance.to_dict()
# create an instance of OriginGroup from a dict
origin_group_from_dict = OriginGroup.from_dict(origin_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


