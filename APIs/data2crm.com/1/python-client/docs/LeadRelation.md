# LeadRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**LeadEntityRelation**](LeadEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.lead_relation import LeadRelation

# TODO update the JSON string below
json = "{}"
# create an instance of LeadRelation from a JSON string
lead_relation_instance = LeadRelation.from_json(json)
# print the JSON string representation of the object
print(LeadRelation.to_json())

# convert the object into a dict
lead_relation_dict = lead_relation_instance.to_dict()
# create an instance of LeadRelation from a dict
lead_relation_from_dict = LeadRelation.from_dict(lead_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


