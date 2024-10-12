# CreateStrategy200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_repricer_for_promotion** | **bool** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**repricer_strategy** | **str** |  | [optional] 
**strategies** | [**List[GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner]**](GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner.md) |  | [optional] 
**strategy_collection_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_strategy200_response import CreateStrategy200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStrategy200Response from a JSON string
create_strategy200_response_instance = CreateStrategy200Response.from_json(json)
# print the JSON string representation of the object
print(CreateStrategy200Response.to_json())

# convert the object into a dict
create_strategy200_response_dict = create_strategy200_response_instance.to_dict()
# create an instance of CreateStrategy200Response from a dict
create_strategy200_response_from_dict = CreateStrategy200Response.from_dict(create_strategy200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


