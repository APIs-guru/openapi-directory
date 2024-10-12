# IngressFrom

Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identities** | **List[str]** | A list of identities that are allowed access through this ingress policy, in the format of &#x60;user:{email_id}&#x60; or &#x60;serviceAccount:{email_id}&#x60;. | [optional] 
**identity_type** | **str** | Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of &#x60;identities&#x60; field will be allowed access. | [optional] 
**sources** | [**List[IngressSource]**](IngressSource.md) | Sources that this IngressPolicy authorizes access from. | [optional] 

## Example

```python
from openapi_client.models.ingress_from import IngressFrom

# TODO update the JSON string below
json = "{}"
# create an instance of IngressFrom from a JSON string
ingress_from_instance = IngressFrom.from_json(json)
# print the JSON string representation of the object
print(IngressFrom.to_json())

# convert the object into a dict
ingress_from_dict = ingress_from_instance.to_dict()
# create an instance of IngressFrom from a dict
ingress_from_from_dict = IngressFrom.from_dict(ingress_from_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


