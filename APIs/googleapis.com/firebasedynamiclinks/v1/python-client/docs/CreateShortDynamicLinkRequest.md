# CreateShortDynamicLinkRequest

Request to create a short Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_link_info** | [**DynamicLinkInfo**](DynamicLinkInfo.md) |  | [optional] 
**long_dynamic_link** | **str** | Full long Dynamic Link URL with desired query parameters specified. For example, \&quot;https://sample.app.goo.gl/?link&#x3D;http://www.google.com&amp;apn&#x3D;com.sample\&quot;, [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). | [optional] 
**sdk_version** | **str** | Google SDK version. Version takes the form \&quot;$major.$minor.$patch\&quot; | [optional] 
**suffix** | [**Suffix**](Suffix.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_short_dynamic_link_request import CreateShortDynamicLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShortDynamicLinkRequest from a JSON string
create_short_dynamic_link_request_instance = CreateShortDynamicLinkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateShortDynamicLinkRequest.to_json())

# convert the object into a dict
create_short_dynamic_link_request_dict = create_short_dynamic_link_request_instance.to_dict()
# create an instance of CreateShortDynamicLinkRequest from a dict
create_short_dynamic_link_request_from_dict = CreateShortDynamicLinkRequest.from_dict(create_short_dynamic_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


