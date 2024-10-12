# V1ScoringsConsolidatedDaily200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[object]** |  | [optional] 
**result** | [**List[V1ScoringsConsolidatedDaily200ResponseResultInner]**](V1ScoringsConsolidatedDaily200ResponseResultInner.md) |  | [optional] 
**status** | **float** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.v1_scorings_consolidated_daily200_response import V1ScoringsConsolidatedDaily200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V1ScoringsConsolidatedDaily200Response from a JSON string
v1_scorings_consolidated_daily200_response_instance = V1ScoringsConsolidatedDaily200Response.from_json(json)
# print the JSON string representation of the object
print(V1ScoringsConsolidatedDaily200Response.to_json())

# convert the object into a dict
v1_scorings_consolidated_daily200_response_dict = v1_scorings_consolidated_daily200_response_instance.to_dict()
# create an instance of V1ScoringsConsolidatedDaily200Response from a dict
v1_scorings_consolidated_daily200_response_from_dict = V1ScoringsConsolidatedDaily200Response.from_dict(v1_scorings_consolidated_daily200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


