# Dpc

An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dpc_name** | **str** | Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application&#39;s user interface. | [optional] [readonly] 
**name** | **str** | Output only. The API resource name in the format &#x60;customers/[CUSTOMER_ID]/dpcs/[DPC_ID]&#x60;. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (&#x60;DPC_ID&#x60;). | [optional] [readonly] 
**package_name** | **str** | Output only. The DPC&#39;s Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dpc import Dpc

# TODO update the JSON string below
json = "{}"
# create an instance of Dpc from a JSON string
dpc_instance = Dpc.from_json(json)
# print the JSON string representation of the object
print(Dpc.to_json())

# convert the object into a dict
dpc_dict = dpc_instance.to_dict()
# create an instance of Dpc from a dict
dpc_from_dict = Dpc.from_dict(dpc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


