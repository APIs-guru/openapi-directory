# DomainControlCenterSsoRequest

Single sign on request information for domain management

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_parameter_key** | **str** | Post parameter key | [optional] 
**post_parameter_value** | **str** | Post parameter value. Client should use &#39;application/x-www-form-urlencoded&#39; encoding for this value. | [optional] 
**url** | **str** | Url where the single sign on request is to be made | [optional] 

## Example

```python
from openapi_client.models.domain_control_center_sso_request import DomainControlCenterSsoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DomainControlCenterSsoRequest from a JSON string
domain_control_center_sso_request_instance = DomainControlCenterSsoRequest.from_json(json)
# print the JSON string representation of the object
print(DomainControlCenterSsoRequest.to_json())

# convert the object into a dict
domain_control_center_sso_request_dict = domain_control_center_sso_request_instance.to_dict()
# create an instance of DomainControlCenterSsoRequest from a dict
domain_control_center_sso_request_from_dict = DomainControlCenterSsoRequest.from_dict(domain_control_center_sso_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


