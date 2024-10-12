# IngressPolicy

Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_from** | [**IngressFrom**](IngressFrom.md) |  | [optional] 
**ingress_to** | [**IngressTo**](IngressTo.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingress_policy import IngressPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IngressPolicy from a JSON string
ingress_policy_instance = IngressPolicy.from_json(json)
# print the JSON string representation of the object
print(IngressPolicy.to_json())

# convert the object into a dict
ingress_policy_dict = ingress_policy_instance.to_dict()
# create an instance of IngressPolicy from a dict
ingress_policy_from_dict = IngressPolicy.from_dict(ingress_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


