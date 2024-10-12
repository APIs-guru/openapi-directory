# Origin

CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OriginProperties**](OriginProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.origin import Origin

# TODO update the JSON string below
json = "{}"
# create an instance of Origin from a JSON string
origin_instance = Origin.from_json(json)
# print the JSON string representation of the object
print(Origin.to_json())

# convert the object into a dict
origin_dict = origin_instance.to_dict()
# create an instance of Origin from a dict
origin_from_dict = Origin.from_dict(origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


