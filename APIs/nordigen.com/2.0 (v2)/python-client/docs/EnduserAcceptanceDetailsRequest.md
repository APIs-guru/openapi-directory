# EnduserAcceptanceDetailsRequest

Represents end-user details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** |  | 
**user_agent** | **str** |  | 

## Example

```python
from openapi_client.models.enduser_acceptance_details_request import EnduserAcceptanceDetailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnduserAcceptanceDetailsRequest from a JSON string
enduser_acceptance_details_request_instance = EnduserAcceptanceDetailsRequest.from_json(json)
# print the JSON string representation of the object
print(EnduserAcceptanceDetailsRequest.to_json())

# convert the object into a dict
enduser_acceptance_details_request_dict = enduser_acceptance_details_request_instance.to_dict()
# create an instance of EnduserAcceptanceDetailsRequest from a dict
enduser_acceptance_details_request_from_dict = EnduserAcceptanceDetailsRequest.from_dict(enduser_acceptance_details_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


