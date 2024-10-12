# Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organisations** | [**List[SummaryOrganisationsInner]**](SummaryOrganisationsInner.md) |  | 
**user** | [**SummaryUser**](SummaryUser.md) |  | 

## Example

```python
from openapi_client.models.summary import Summary

# TODO update the JSON string below
json = "{}"
# create an instance of Summary from a JSON string
summary_instance = Summary.from_json(json)
# print the JSON string representation of the object
print(Summary.to_json())

# convert the object into a dict
summary_dict = summary_instance.to_dict()
# create an instance of Summary from a dict
summary_from_dict = Summary.from_dict(summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


