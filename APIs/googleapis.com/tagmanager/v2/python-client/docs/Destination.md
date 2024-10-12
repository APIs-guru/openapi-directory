# Destination

Represents a Google Tag Destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**destination_id** | **str** | Destination ID. | [optional] 
**destination_link_id** | **str** | The Destination link ID uniquely identifies the Destination. | [optional] 
**fingerprint** | **str** | The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified. | [optional] 
**name** | **str** | Destination display name. | [optional] 
**path** | **str** | Destination&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI. | [optional] 

## Example

```python
from openapi_client.models.destination import Destination

# TODO update the JSON string below
json = "{}"
# create an instance of Destination from a JSON string
destination_instance = Destination.from_json(json)
# print the JSON string representation of the object
print(Destination.to_json())

# convert the object into a dict
destination_dict = destination_instance.to_dict()
# create an instance of Destination from a dict
destination_from_dict = Destination.from_dict(destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


