# Content

The Content resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[File]**](File.md) | The list of script project files. One of the files is a script manifest; it must be named \&quot;appsscript\&quot;, must have type of JSON, and include the manifest configurations for the project. | [optional] 
**script_id** | **str** | The script project&#39;s Drive ID. | [optional] 

## Example

```python
from openapi_client.models.content import Content

# TODO update the JSON string below
json = "{}"
# create an instance of Content from a JSON string
content_instance = Content.from_json(json)
# print the JSON string representation of the object
print(Content.to_json())

# convert the object into a dict
content_dict = content_instance.to_dict()
# create an instance of Content from a dict
content_from_dict = Content.from_dict(content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


