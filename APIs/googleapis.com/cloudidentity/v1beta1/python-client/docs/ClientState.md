# ClientState

Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_tags** | **List[str]** | The caller can specify asset tags for this resource | [optional] 
**compliance_state** | **str** | The compliance state of the resource as specified by the API client. | [optional] 
**create_time** | **str** | Output only. The time the client state data was created. | [optional] [readonly] 
**custom_id** | **str** | This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. | [optional] 
**etag** | **str** | The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest | [optional] 
**health_score** | **str** | The Health score of the resource | [optional] 
**key_value_pairs** | [**Dict[str, CustomAttributeValue]**](CustomAttributeValue.md) | The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. | [optional] 
**last_update_time** | **str** | Output only. The time the client state data was last updated. | [optional] [readonly] 
**managed** | **str** | The management state of the resource as specified by the API client. | [optional] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: &#x60;devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}&#x60;, where partner_id corresponds to the partner storing the data. | [optional] [readonly] 
**owner_type** | **str** | Output only. The owner of the ClientState | [optional] [readonly] 
**score_reason** | **str** | A descriptive cause of the health score. | [optional] 

## Example

```python
from openapi_client.models.client_state import ClientState

# TODO update the JSON string below
json = "{}"
# create an instance of ClientState from a JSON string
client_state_instance = ClientState.from_json(json)
# print the JSON string representation of the object
print(ClientState.to_json())

# convert the object into a dict
client_state_dict = client_state_instance.to_dict()
# create an instance of ClientState from a dict
client_state_from_dict = ClientState.from_dict(client_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


