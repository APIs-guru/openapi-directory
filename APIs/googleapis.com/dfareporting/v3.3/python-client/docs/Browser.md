# Browser

Contains information about a browser that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_version_id** | **str** | ID referring to this grouping of browser and version numbers. This is the ID used for targeting. | [optional] 
**dart_id** | **str** | DART ID of this browser. This is the ID used when generating reports. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#browser\&quot;. | [optional] 
**major_version** | **str** | Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can&#39;t tell which version it is. | [optional] 
**minor_version** | **str** | Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can&#39;t tell which version it is. | [optional] 
**name** | **str** | Name of this browser. | [optional] 

## Example

```python
from openapi_client.models.browser import Browser

# TODO update the JSON string below
json = "{}"
# create an instance of Browser from a JSON string
browser_instance = Browser.from_json(json)
# print the JSON string representation of the object
print(Browser.to_json())

# convert the object into a dict
browser_dict = browser_instance.to_dict()
# create an instance of Browser from a dict
browser_from_dict = Browser.from_dict(browser_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


