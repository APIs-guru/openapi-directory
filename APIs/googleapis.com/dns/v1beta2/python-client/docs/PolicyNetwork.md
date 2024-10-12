# PolicyNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#policyNetwork']
**network_url** | **str** | The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} | [optional] 

## Example

```python
from openapi_client.models.policy_network import PolicyNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyNetwork from a JSON string
policy_network_instance = PolicyNetwork.from_json(json)
# print the JSON string representation of the object
print(PolicyNetwork.to_json())

# convert the object into a dict
policy_network_dict = policy_network_instance.to_dict()
# create an instance of PolicyNetwork from a dict
policy_network_from_dict = PolicyNetwork.from_dict(policy_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


