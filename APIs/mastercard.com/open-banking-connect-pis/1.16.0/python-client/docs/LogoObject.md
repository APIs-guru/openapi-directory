# LogoObject

Logo metadata and image content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_content** | **str** | This field is deprecated, use logoUrl instead | [optional] 
**file_type** | [**LogoFileType**](LogoFileType.md) |  | [optional] 
**logo_url** | **str** | URL to a logo file | [optional] 

## Example

```python
from openapi_client.models.logo_object import LogoObject

# TODO update the JSON string below
json = "{}"
# create an instance of LogoObject from a JSON string
logo_object_instance = LogoObject.from_json(json)
# print the JSON string representation of the object
print(LogoObject.to_json())

# convert the object into a dict
logo_object_dict = logo_object_instance.to_dict()
# create an instance of LogoObject from a dict
logo_object_from_dict = LogoObject.from_dict(logo_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


