# Activity

JSON template for the activity resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | [**ActivityActor**](ActivityActor.md) |  | [optional] 
**etag** | **str** | ETag of the entry. | [optional] 
**events** | [**List[ActivityEventsInner]**](ActivityEventsInner.md) | Activity events in the report. | [optional] 
**id** | [**ActivityId**](ActivityId.md) |  | [optional] 
**ip_address** | **str** | IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace, which may or may not reflect the user&#39;s physical location. For example, the IP address can be the user&#39;s proxy server&#39;s address or a virtual private network (VPN) address. The API supports IPv4 and IPv6. | [optional] 
**kind** | **str** | The type of API resource. For an activity report, the value is &#x60;audit#activity&#x60;. | [optional] [default to 'admin#reports#activity']
**owner_domain** | **str** | This is the domain that is affected by the report&#39;s event. For example domain of Admin console or the Drive application&#39;s document owner. | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


