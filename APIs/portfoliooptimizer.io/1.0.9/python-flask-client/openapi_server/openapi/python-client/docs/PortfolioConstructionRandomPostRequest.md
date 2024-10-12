# PortfolioConstructionRandomPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  | [optional] 
**portfolios** | **int** | The number of portfolios to construct | [optional] [default to 25]

## Example

```python
from openapi_client.models.portfolio_construction_random_post_request import PortfolioConstructionRandomPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioConstructionRandomPostRequest from a JSON string
portfolio_construction_random_post_request_instance = PortfolioConstructionRandomPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioConstructionRandomPostRequest.to_json())

# convert the object into a dict
portfolio_construction_random_post_request_dict = portfolio_construction_random_post_request_instance.to_dict()
# create an instance of PortfolioConstructionRandomPostRequest from a dict
portfolio_construction_random_post_request_from_dict = PortfolioConstructionRandomPostRequest.from_dict(portfolio_construction_random_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


