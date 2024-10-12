# LeadsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | E-mail of the lead to filter on | [optional] 
**first_name** | **str** | First name of the lead to filter on | [optional] 
**last_name** | **str** | Last name of the lead to filter on | [optional] 
**name** | **str** | Name of the lead to filter on | [optional] 

## Example

```python
from openapi_client.models.leads_filter import LeadsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of LeadsFilter from a JSON string
leads_filter_instance = LeadsFilter.from_json(json)
# print the JSON string representation of the object
print(LeadsFilter.to_json())

# convert the object into a dict
leads_filter_dict = leads_filter_instance.to_dict()
# create an instance of LeadsFilter from a dict
leads_filter_from_dict = LeadsFilter.from_dict(leads_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


