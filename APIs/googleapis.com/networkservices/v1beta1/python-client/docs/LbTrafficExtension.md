# LbTrafficExtension

`LbTrafficExtension` is a resource that lets the extension service modify the headers and payloads of both requests and responses without impacting the choice of backend services or any other security policies associated with the backend service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A human-readable description of the resource. | [optional] 
**extension_chains** | [**List[ExtensionChain]**](ExtensionChain.md) | Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource. | [optional] 
**forwarding_rules** | **List[str]** | Required. A list of references to the forwarding rules to which this service extension is attached to. At least one forwarding rule is required. There can be only one &#x60;LBTrafficExtension&#x60; resource per forwarding rule. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of labels associated with the &#x60;LbTrafficExtension&#x60; resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources. | [optional] 
**load_balancing_scheme** | **str** | Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: &#x60;INTERNAL_MANAGED&#x60;, &#x60;EXTERNAL_MANAGED&#x60;. For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). | [optional] 
**name** | **str** | Required. Identifier. Name of the &#x60;LbTrafficExtension&#x60; resource in the following format: &#x60;projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}&#x60;. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lb_traffic_extension import LbTrafficExtension

# TODO update the JSON string below
json = "{}"
# create an instance of LbTrafficExtension from a JSON string
lb_traffic_extension_instance = LbTrafficExtension.from_json(json)
# print the JSON string representation of the object
print(LbTrafficExtension.to_json())

# convert the object into a dict
lb_traffic_extension_dict = lb_traffic_extension_instance.to_dict()
# create an instance of LbTrafficExtension from a dict
lb_traffic_extension_from_dict = LbTrafficExtension.from_dict(lb_traffic_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


