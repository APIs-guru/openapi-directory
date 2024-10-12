# Site

Represents a web app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


