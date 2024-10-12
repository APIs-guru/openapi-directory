# AadConnectivityState

Describes an Azure resource with kind

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectivity_state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.aad_connectivity_state import AadConnectivityState

# TODO update the JSON string below
json = "{}"
# create an instance of AadConnectivityState from a JSON string
aad_connectivity_state_instance = AadConnectivityState.from_json(json)
# print the JSON string representation of the object
print(AadConnectivityState.to_json())

# convert the object into a dict
aad_connectivity_state_dict = aad_connectivity_state_instance.to_dict()
# create an instance of AadConnectivityState from a dict
aad_connectivity_state_from_dict = AadConnectivityState.from_dict(aad_connectivity_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


