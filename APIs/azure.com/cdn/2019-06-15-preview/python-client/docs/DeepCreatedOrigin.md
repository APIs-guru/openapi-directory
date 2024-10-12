# DeepCreatedOrigin

The main origin of CDN content which is added when creating a CDN endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Origin name | 
**properties** | [**DeepCreatedOriginProperties**](DeepCreatedOriginProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.deep_created_origin import DeepCreatedOrigin

# TODO update the JSON string below
json = "{}"
# create an instance of DeepCreatedOrigin from a JSON string
deep_created_origin_instance = DeepCreatedOrigin.from_json(json)
# print the JSON string representation of the object
print(DeepCreatedOrigin.to_json())

# convert the object into a dict
deep_created_origin_dict = deep_created_origin_instance.to_dict()
# create an instance of DeepCreatedOrigin from a dict
deep_created_origin_from_dict = DeepCreatedOrigin.from_dict(deep_created_origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


