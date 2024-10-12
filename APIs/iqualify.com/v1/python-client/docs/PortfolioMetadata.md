# PortfolioMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**level** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**topic** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_metadata import PortfolioMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioMetadata from a JSON string
portfolio_metadata_instance = PortfolioMetadata.from_json(json)
# print the JSON string representation of the object
print(PortfolioMetadata.to_json())

# convert the object into a dict
portfolio_metadata_dict = portfolio_metadata_instance.to_dict()
# create an instance of PortfolioMetadata from a dict
portfolio_metadata_from_dict = PortfolioMetadata.from_dict(portfolio_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


