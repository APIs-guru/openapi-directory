# WebtestsResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.webtests_resource import WebtestsResource

# TODO update the JSON string below
json = "{}"
# create an instance of WebtestsResource from a JSON string
webtests_resource_instance = WebtestsResource.from_json(json)
# print the JSON string representation of the object
print(WebtestsResource.to_json())

# convert the object into a dict
webtests_resource_dict = webtests_resource_instance.to_dict()
# create an instance of WebtestsResource from a dict
webtests_resource_from_dict = WebtestsResource.from_dict(webtests_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


