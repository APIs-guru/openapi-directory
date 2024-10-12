# PortfolioConstructionRandomPostRequestConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_assets_weights** | **List[float]** | maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage | [optional] 
**maximum_portfolio_exposure** | **float** | The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure | [optional] [default to 1]
**minimum_assets_weights** | **List[float]** | minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage | [optional] 
**minimum_portfolio_exposure** | **float** | The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure | [optional] [default to 1]

## Example

```python
from openapi_client.models.portfolio_construction_random_post_request_constraints import PortfolioConstructionRandomPostRequestConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioConstructionRandomPostRequestConstraints from a JSON string
portfolio_construction_random_post_request_constraints_instance = PortfolioConstructionRandomPostRequestConstraints.from_json(json)
# print the JSON string representation of the object
print(PortfolioConstructionRandomPostRequestConstraints.to_json())

# convert the object into a dict
portfolio_construction_random_post_request_constraints_dict = portfolio_construction_random_post_request_constraints_instance.to_dict()
# create an instance of PortfolioConstructionRandomPostRequestConstraints from a dict
portfolio_construction_random_post_request_constraints_from_dict = PortfolioConstructionRandomPostRequestConstraints.from_dict(portfolio_construction_random_post_request_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


