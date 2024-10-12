# PortfolioConstructionInvestablePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_positions** | **List[float]** | assetsPositions[i] is the number of shares of the asset i in the portfolio | 
**assets_weights** | **List[float]** | assetsWeights[i] is the weight of the asset i in the portfolio, in percentage | 

## Example

```python
from openapi_client.models.portfolio_construction_investable_post200_response import PortfolioConstructionInvestablePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioConstructionInvestablePost200Response from a JSON string
portfolio_construction_investable_post200_response_instance = PortfolioConstructionInvestablePost200Response.from_json(json)
# print the JSON string representation of the object
print(PortfolioConstructionInvestablePost200Response.to_json())

# convert the object into a dict
portfolio_construction_investable_post200_response_dict = portfolio_construction_investable_post200_response_instance.to_dict()
# create an instance of PortfolioConstructionInvestablePost200Response from a dict
portfolio_construction_investable_post200_response_from_dict = PortfolioConstructionInvestablePost200Response.from_dict(portfolio_construction_investable_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


