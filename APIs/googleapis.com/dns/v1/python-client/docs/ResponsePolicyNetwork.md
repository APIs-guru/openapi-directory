# ResponsePolicyNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#responsePolicyNetwork']
**network_url** | **str** | The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} | [optional] 

## Example

```python
from openapi_client.models.response_policy_network import ResponsePolicyNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicyNetwork from a JSON string
response_policy_network_instance = ResponsePolicyNetwork.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicyNetwork.to_json())

# convert the object into a dict
response_policy_network_dict = response_policy_network_instance.to_dict()
# create an instance of ResponsePolicyNetwork from a dict
response_policy_network_from_dict = ResponsePolicyNetwork.from_dict(response_policy_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


