# BeaconAttachment

Project-specific data associated with a beacon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_name** | **str** | Resource name of this attachment. Attachment names have the format: beacons/ beacon_id/attachments/attachment_id. Leave this empty on creation. | [optional] 
**creation_time_ms** | **str** | The UTC time when this attachment was created, in milliseconds since the UNIX epoch. | [optional] 
**data** | **bytearray** | An opaque data container for client-provided data. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. Required. | [optional] 
**max_distance_meters** | **float** | The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is \&quot;seen\&quot; when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon&#39;s outer limit of detection. Negative values are invalid and return an error. | [optional] 
**namespaced_type** | **str** | Specifies what kind of attachment this is. Tells a client how to interpret the &#x60;data&#x60; field. Format is namespace/type. Namespace provides type separation between clients. Type describes the type of &#x60;data&#x60;, for use by the client when parsing the &#x60;data&#x60; field. Required. | [optional] 

## Example

```python
from openapi_client.models.beacon_attachment import BeaconAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of BeaconAttachment from a JSON string
beacon_attachment_instance = BeaconAttachment.from_json(json)
# print the JSON string representation of the object
print(BeaconAttachment.to_json())

# convert the object into a dict
beacon_attachment_dict = beacon_attachment_instance.to_dict()
# create an instance of BeaconAttachment from a dict
beacon_attachment_from_dict = BeaconAttachment.from_dict(beacon_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


