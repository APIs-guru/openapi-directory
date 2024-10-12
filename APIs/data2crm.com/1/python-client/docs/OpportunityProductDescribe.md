# OpportunityProductDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.opportunity_product_describe import OpportunityProductDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityProductDescribe from a JSON string
opportunity_product_describe_instance = OpportunityProductDescribe.from_json(json)
# print the JSON string representation of the object
print(OpportunityProductDescribe.to_json())

# convert the object into a dict
opportunity_product_describe_dict = opportunity_product_describe_instance.to_dict()
# create an instance of OpportunityProductDescribe from a dict
opportunity_product_describe_from_dict = OpportunityProductDescribe.from_dict(opportunity_product_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


