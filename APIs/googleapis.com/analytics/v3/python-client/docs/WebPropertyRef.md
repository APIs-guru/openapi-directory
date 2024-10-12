# WebPropertyRef

JSON template for a web property reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this web property belongs. | [optional] 
**href** | **str** | Link for this web property. | [optional] 
**id** | **str** | Web property ID of the form UA-XXXXX-YY. | [optional] 
**internal_web_property_id** | **str** | Internal ID for this web property. | [optional] 
**kind** | **str** | Analytics web property reference. | [optional] [default to 'analytics#webPropertyRef']
**name** | **str** | Name of this web property. | [optional] 

## Example

```python
from openapi_client.models.web_property_ref import WebPropertyRef

# TODO update the JSON string below
json = "{}"
# create an instance of WebPropertyRef from a JSON string
web_property_ref_instance = WebPropertyRef.from_json(json)
# print the JSON string representation of the object
print(WebPropertyRef.to_json())

# convert the object into a dict
web_property_ref_dict = web_property_ref_instance.to_dict()
# create an instance of WebPropertyRef from a dict
web_property_ref_from_dict = WebPropertyRef.from_dict(web_property_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


