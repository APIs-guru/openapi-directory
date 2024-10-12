# Limits1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | A comma-separated list of fields that were returned in the request. | 
**var_from** | **datetime** | The start of range of time when the metrics were aggregated for the query. | 
**to** | **datetime** | The end of the range of time when the metrics were aggregated for the query. | 

## Example

```python
from openapi_client.models.limits1 import Limits1

# TODO update the JSON string below
json = "{}"
# create an instance of Limits1 from a JSON string
limits1_instance = Limits1.from_json(json)
# print the JSON string representation of the object
print(Limits1.to_json())

# convert the object into a dict
limits1_dict = limits1_instance.to_dict()
# create an instance of Limits1 from a dict
limits1_from_dict = Limits1.from_dict(limits1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


