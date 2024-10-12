# CreateManagedShortLinkRequest

Request to create a managed Short Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_link_info** | [**DynamicLinkInfo**](DynamicLinkInfo.md) |  | [optional] 
**long_dynamic_link** | **str** | Full long Dynamic Link URL with desired query parameters specified. For example, \&quot;https://sample.app.goo.gl/?link&#x3D;http://www.google.com&amp;apn&#x3D;com.sample\&quot;, [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). | [optional] 
**name** | **str** | Link name to associate with the link. It&#39;s used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked. | [optional] 
**sdk_version** | **str** | Google SDK version. Version takes the form \&quot;$major.$minor.$patch\&quot; | [optional] 
**suffix** | [**Suffix**](Suffix.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_managed_short_link_request import CreateManagedShortLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagedShortLinkRequest from a JSON string
create_managed_short_link_request_instance = CreateManagedShortLinkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateManagedShortLinkRequest.to_json())

# convert the object into a dict
create_managed_short_link_request_dict = create_managed_short_link_request_instance.to_dict()
# create an instance of CreateManagedShortLinkRequest from a dict
create_managed_short_link_request_from_dict = CreateManagedShortLinkRequest.from_dict(create_managed_short_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


