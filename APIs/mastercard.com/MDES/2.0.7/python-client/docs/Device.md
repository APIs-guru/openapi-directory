# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Serial number of the device provisioned with the token. May be masked. Conditional field, not present for CoF tokens, and only present when provided by a Wallet Provider. May be masked (by the Wallet Provider).&lt;br /&gt;Example (unmasked) \&quot;C2ZBY14310005664\&quot;. Example (masked) \&quot;xxxxY1431xxxxxxx\&quot;. | [optional] 
**device_name** | **str** | Nickname of the device provisioned with the token. Conditional field, not present for CoF tokens, and only present when the Payment App Provider has implemented the &#39;Get Device Info&#39; MDES API. | [optional] 
**device_type** | **str** | Type of the device provisioned with the token. Valid values:&lt;br /&gt;    \&quot;03\&quot; - Watch&lt;br /&gt;    \&quot;09\&quot; - Mobile Phone or Smartphone with a fixed (non-removable) secure element not controlled by the mobile network operator&lt;br /&gt;    \&quot;13\&quot; - Tablet or e-reader with a fixed (non-removable) secure element not controlled by the mobile network operator&lt;br /&gt;    \&quot;14\&quot; - Mobile phone or Smartphone with a payment application running in a host processor&lt;br /&gt;    \&quot;15\&quot; - Tablet or E-Book with a payment application running in a host processor&lt;br /&gt;    \&quot;16\&quot; ? Mobile Phone or Smartphone with a payment application running in the TEE of a host processor&lt;br /&gt;    \&quot;17\&quot; ? Tablet or E-Book with a payment application running in the TEE of a host processor&lt;br /&gt;    \&quot;18\&quot; ? Watch with a payment application running in the TEE of a host processor&lt;br /&gt;    \&quot;19\&quot; ? Watch with a payment application running in a host processor.&lt;br /&gt;    \&quot;21\&quot; ? Phone.&lt;br /&gt;    \&quot;22\&quot; ? Tablet. &lt;br /&gt;    \&quot;23\&quot; ? Watch.&lt;br /&gt;    \&quot;24\&quot; ? Sticker.&lt;br /&gt;    \&quot;25\&quot; ? Personal Computer.&lt;br /&gt;    \&quot;26\&quot; ? Device Peripheral.&lt;br /&gt;    \&quot;27\&quot; ? Tag.&lt;br /&gt;    \&quot;28\&quot; ? Jewelry.&lt;br /&gt;    \&quot;29\&quot; ?  Fashion Accessory.&lt;br /&gt;    \&quot;30\&quot; ?  Garment.&lt;br /&gt;    \&quot;31\&quot; ?  Domestic Appliance.&lt;br /&gt;    \&quot;32\&quot; ?  Vehicle.&lt;br /&gt;    \&quot;33\&quot; ?  Media or Gaming Device.&lt;br /&gt;    \&quot;99\&quot; ?  Undefined.&lt;br /&gt;Conditional field, not present for CoF tokens, and only present when supplied by the Payment App Provider. | [optional] 
**secure_element_id** | **str** | Identifier of the secure element provisioned with the token. Conditional field, not present for CoF tokens, and only present when the token is provisioned to a secure element. | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


