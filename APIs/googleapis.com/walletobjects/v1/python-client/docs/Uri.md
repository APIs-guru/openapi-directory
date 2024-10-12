# Uri


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The URI&#39;s title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when &#x60;description&#x60; is part of an image. | [optional] 
**id** | **str** | The ID associated with a uri. This field is here to enable ease of management of uris. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#uri\&quot;&#x60;. | [optional] 
**localized_description** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**uri** | **str** | The location of a web page, image, or other resource. URIs in the &#x60;LinksModuleData&#x60; module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme. | [optional] 

## Example

```python
from openapi_client.models.uri import Uri

# TODO update the JSON string below
json = "{}"
# create an instance of Uri from a JSON string
uri_instance = Uri.from_json(json)
# print the JSON string representation of the object
print(Uri.to_json())

# convert the object into a dict
uri_dict = uri_instance.to_dict()
# create an instance of Uri from a dict
uri_from_dict = Uri.from_dict(uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


