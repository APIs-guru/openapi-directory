# AttachmentInfo

A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | An opaque data container for client-provided data. | [optional] 
**max_distance_meters** | **float** | The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is \&quot;seen\&quot; when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon&#39;s outer limit of detection. | [optional] 
**namespaced_type** | **str** | Specifies what kind of attachment this is. Tells a client how to interpret the &#x60;data&#x60; field. Format is namespace/type, for example scrupulous-wombat-12345/welcome-message | [optional] 

## Example

```python
from openapi_client.models.attachment_info import AttachmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentInfo from a JSON string
attachment_info_instance = AttachmentInfo.from_json(json)
# print the JSON string representation of the object
print(AttachmentInfo.to_json())

# convert the object into a dict
attachment_info_dict = attachment_info_instance.to_dict()
# create an instance of AttachmentInfo from a dict
attachment_info_from_dict = AttachmentInfo.from_dict(attachment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


