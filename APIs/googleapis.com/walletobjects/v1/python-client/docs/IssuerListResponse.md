# IssuerListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**List[Issuer]**](Issuer.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.issuer_list_response import IssuerListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerListResponse from a JSON string
issuer_list_response_instance = IssuerListResponse.from_json(json)
# print the JSON string representation of the object
print(IssuerListResponse.to_json())

# convert the object into a dict
issuer_list_response_dict = issuer_list_response_instance.to_dict()
# create an instance of IssuerListResponse from a dict
issuer_list_response_from_dict = IssuerListResponse.from_dict(issuer_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


