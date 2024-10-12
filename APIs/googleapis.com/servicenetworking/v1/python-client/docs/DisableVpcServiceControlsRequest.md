# DisableVpcServiceControlsRequest

Request to disable VPC service controls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in &#39;12345&#39; {network} is network name. | [optional] 

## Example

```python
from openapi_client.models.disable_vpc_service_controls_request import DisableVpcServiceControlsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DisableVpcServiceControlsRequest from a JSON string
disable_vpc_service_controls_request_instance = DisableVpcServiceControlsRequest.from_json(json)
# print the JSON string representation of the object
print(DisableVpcServiceControlsRequest.to_json())

# convert the object into a dict
disable_vpc_service_controls_request_dict = disable_vpc_service_controls_request_instance.to_dict()
# create an instance of DisableVpcServiceControlsRequest from a dict
disable_vpc_service_controls_request_from_dict = DisableVpcServiceControlsRequest.from_dict(disable_vpc_service_controls_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


