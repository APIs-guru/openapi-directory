# ItsmReceiver

An Itsm receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Unique identification of ITSM connection among multiple defined in above workspace. | 
**name** | **str** | The name of the Itsm receiver. Names must be unique across all receivers within an action group. | 
**region** | **str** | Region in which workspace resides. Supported values:&#39;centralindia&#39;,&#39;japaneast&#39;,&#39;southeastasia&#39;,&#39;australiasoutheast&#39;,&#39;uksouth&#39;,&#39;westcentralus&#39;,&#39;canadacentral&#39;,&#39;eastus&#39;,&#39;westeurope&#39; | 
**ticket_configuration** | **str** | JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well. | 
**workspace_id** | **str** | OMS LA instance identifier. | 

## Example

```python
from openapi_client.models.itsm_receiver import ItsmReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of ItsmReceiver from a JSON string
itsm_receiver_instance = ItsmReceiver.from_json(json)
# print the JSON string representation of the object
print(ItsmReceiver.to_json())

# convert the object into a dict
itsm_receiver_dict = itsm_receiver_instance.to_dict()
# create an instance of ItsmReceiver from a dict
itsm_receiver_from_dict = ItsmReceiver.from_dict(itsm_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


