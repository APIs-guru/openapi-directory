# ConfidentialNodes

ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Confidential Nodes feature is enabled. | [optional] 

## Example

```python
from openapi_client.models.confidential_nodes import ConfidentialNodes

# TODO update the JSON string below
json = "{}"
# create an instance of ConfidentialNodes from a JSON string
confidential_nodes_instance = ConfidentialNodes.from_json(json)
# print the JSON string representation of the object
print(ConfidentialNodes.to_json())

# convert the object into a dict
confidential_nodes_dict = confidential_nodes_instance.to_dict()
# create an instance of ConfidentialNodes from a dict
confidential_nodes_from_dict = ConfidentialNodes.from_dict(confidential_nodes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


