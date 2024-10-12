# ChromeOsDevices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chromeosdevices** | [**List[ChromeOsDevice]**](ChromeOsDevice.md) | A list of Chrome OS Device objects. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#chromeosdevices']
**next_page_token** | **str** | Token used to access the next page of this result. To access the next page, use this token&#39;s value in the &#x60;pageToken&#x60; query string of this request. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_devices import ChromeOsDevices

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDevices from a JSON string
chrome_os_devices_instance = ChromeOsDevices.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDevices.to_json())

# convert the object into a dict
chrome_os_devices_dict = chrome_os_devices_instance.to_dict()
# create an instance of ChromeOsDevices from a dict
chrome_os_devices_from_dict = ChromeOsDevices.from_dict(chrome_os_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


