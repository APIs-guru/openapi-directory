# OpportunityDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.opportunity_describe import OpportunityDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityDescribe from a JSON string
opportunity_describe_instance = OpportunityDescribe.from_json(json)
# print the JSON string representation of the object
print(OpportunityDescribe.to_json())

# convert the object into a dict
opportunity_describe_dict = opportunity_describe_instance.to_dict()
# create an instance of OpportunityDescribe from a dict
opportunity_describe_from_dict = OpportunityDescribe.from_dict(opportunity_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


