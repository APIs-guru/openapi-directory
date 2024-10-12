# PortfolioLicenseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | **List[str]** |  | [optional] 
**owner** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_license_response import PortfolioLicenseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioLicenseResponse from a JSON string
portfolio_license_response_instance = PortfolioLicenseResponse.from_json(json)
# print the JSON string representation of the object
print(PortfolioLicenseResponse.to_json())

# convert the object into a dict
portfolio_license_response_dict = portfolio_license_response_instance.to_dict()
# create an instance of PortfolioLicenseResponse from a dict
portfolio_license_response_from_dict = PortfolioLicenseResponse.from_dict(portfolio_license_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


