# MergeTemplates200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MergeTemplates200ResponseMeta**](MergeTemplates200ResponseMeta.md) |  | [optional] 
**response** | **str** | Base64 encoded document if the output&#x3D;base64 is used or URL to the document when the output&#x3D;url is used. | [optional] 

## Example

```python
from openapi_client.models.merge_templates200_response import MergeTemplates200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MergeTemplates200Response from a JSON string
merge_templates200_response_instance = MergeTemplates200Response.from_json(json)
# print the JSON string representation of the object
print(MergeTemplates200Response.to_json())

# convert the object into a dict
merge_templates200_response_dict = merge_templates200_response_instance.to_dict()
# create an instance of MergeTemplates200Response from a dict
merge_templates200_response_from_dict = MergeTemplates200Response.from_dict(merge_templates200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


