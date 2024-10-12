# LeadDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.lead_describe import LeadDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of LeadDescribe from a JSON string
lead_describe_instance = LeadDescribe.from_json(json)
# print the JSON string representation of the object
print(LeadDescribe.to_json())

# convert the object into a dict
lead_describe_dict = lead_describe_instance.to_dict()
# create an instance of LeadDescribe from a dict
lead_describe_from_dict = LeadDescribe.from_dict(lead_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


