# EnableVpcServiceControlsRequest

Request to enable VPC service controls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in &#39;12345&#39; {network} is network name. | [optional] 

## Example

```python
from openapi_client.models.enable_vpc_service_controls_request import EnableVpcServiceControlsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnableVpcServiceControlsRequest from a JSON string
enable_vpc_service_controls_request_instance = EnableVpcServiceControlsRequest.from_json(json)
# print the JSON string representation of the object
print(EnableVpcServiceControlsRequest.to_json())

# convert the object into a dict
enable_vpc_service_controls_request_dict = enable_vpc_service_controls_request_instance.to_dict()
# create an instance of EnableVpcServiceControlsRequest from a dict
enable_vpc_service_controls_request_from_dict = EnableVpcServiceControlsRequest.from_dict(enable_vpc_service_controls_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


