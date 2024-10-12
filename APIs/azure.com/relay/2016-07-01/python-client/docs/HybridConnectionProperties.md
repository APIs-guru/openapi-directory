# HybridConnectionProperties

Properties of the HybridConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the HybridConnection was created. | [optional] [readonly] 
**listener_count** | **int** | The number of listeners for this HybridConnection. min : 1 and max:25 supported | [optional] [readonly] 
**requires_client_authorization** | **bool** | true if client authorization is needed for this HybridConnection; otherwise, false. | [optional] 
**updated_at** | **datetime** | The time the namespace was updated. | [optional] [readonly] 
**user_metadata** | **str** | usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. | [optional] 

## Example

```python
from openapi_client.models.hybrid_connection_properties import HybridConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionProperties from a JSON string
hybrid_connection_properties_instance = HybridConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionProperties.to_json())

# convert the object into a dict
hybrid_connection_properties_dict = hybrid_connection_properties_instance.to_dict()
# create an instance of HybridConnectionProperties from a dict
hybrid_connection_properties_from_dict = HybridConnectionProperties.from_dict(hybrid_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


