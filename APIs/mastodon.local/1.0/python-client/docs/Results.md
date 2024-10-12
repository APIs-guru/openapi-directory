# Results

Represents the results of a search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[Account]**](Account.md) | Accounts which match the given query. | 
**hashtags** | [**List[Tag]**](Tag.md) | Hashtags which match the given query. | 
**statuses** | [**List[Status]**](Status.md) | Statuses which match the given query. | 

## Example

```python
from openapi_client.models.results import Results

# TODO update the JSON string below
json = "{}"
# create an instance of Results from a JSON string
results_instance = Results.from_json(json)
# print the JSON string representation of the object
print(Results.to_json())

# convert the object into a dict
results_dict = results_instance.to_dict()
# create an instance of Results from a dict
results_from_dict = Results.from_dict(results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


