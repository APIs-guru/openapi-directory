# PortfolioRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**start_date** | **str** |  | 

## Example

```python
from openapi_client.models.portfolio_request import PortfolioRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioRequest from a JSON string
portfolio_request_instance = PortfolioRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioRequest.to_json())

# convert the object into a dict
portfolio_request_dict = portfolio_request_instance.to_dict()
# create an instance of PortfolioRequest from a dict
portfolio_request_from_dict = PortfolioRequest.from_dict(portfolio_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


