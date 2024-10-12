# UnsecuredSmeLoansGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[UnsecuredSmeLoansGet200ResponseDataInner]**](UnsecuredSmeLoansGet200ResponseDataInner.md) |  | 
**meta** | [**MetaData**](MetaData.md) |  | 

## Example

```python
from openapi_client.models.unsecured_sme_loans_get200_response import UnsecuredSmeLoansGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UnsecuredSmeLoansGet200Response from a JSON string
unsecured_sme_loans_get200_response_instance = UnsecuredSmeLoansGet200Response.from_json(json)
# print the JSON string representation of the object
print(UnsecuredSmeLoansGet200Response.to_json())

# convert the object into a dict
unsecured_sme_loans_get200_response_dict = unsecured_sme_loans_get200_response_instance.to_dict()
# create an instance of UnsecuredSmeLoansGet200Response from a dict
unsecured_sme_loans_get200_response_from_dict = UnsecuredSmeLoansGet200Response.from_dict(unsecured_sme_loans_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


