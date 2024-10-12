# IconUris

Links to product icons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hero** | **str** | URI to hero icon. | [optional] 
**large** | **str** | URI to large icon. | [optional] 
**medium** | **str** | URI to medium icon. | [optional] 
**small** | **str** | URI to small icon. | [optional] 
**wide** | **str** | URI to wide icon. | [optional] 

## Example

```python
from openapi_client.models.icon_uris import IconUris

# TODO update the JSON string below
json = "{}"
# create an instance of IconUris from a JSON string
icon_uris_instance = IconUris.from_json(json)
# print the JSON string representation of the object
print(IconUris.to_json())

# convert the object into a dict
icon_uris_dict = icon_uris_instance.to_dict()
# create an instance of IconUris from a dict
icon_uris_from_dict = IconUris.from_dict(icon_uris_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


