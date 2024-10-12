# MergeTemplates200ResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Document content type. | [optional] 
**display_name** | **str** | Document name without the file extension. | [optional] 
**encoding** | **str** | Document encoding | [optional] 
**name** | **str** | Document name. This value is automatically generated if name attribute is not defined in request. | [optional] 

## Example

```python
from openapi_client.models.merge_templates200_response_meta import MergeTemplates200ResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of MergeTemplates200ResponseMeta from a JSON string
merge_templates200_response_meta_instance = MergeTemplates200ResponseMeta.from_json(json)
# print the JSON string representation of the object
print(MergeTemplates200ResponseMeta.to_json())

# convert the object into a dict
merge_templates200_response_meta_dict = merge_templates200_response_meta_instance.to_dict()
# create an instance of MergeTemplates200ResponseMeta from a dict
merge_templates200_response_meta_from_dict = MergeTemplates200ResponseMeta.from_dict(merge_templates200_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


