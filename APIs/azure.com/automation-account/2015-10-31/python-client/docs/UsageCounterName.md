# UsageCounterName

Definition of usage counter name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Gets or sets the localized usage counter name. | [optional] 
**value** | **str** | Gets or sets the usage counter name. | [optional] 

## Example

```python
from openapi_client.models.usage_counter_name import UsageCounterName

# TODO update the JSON string below
json = "{}"
# create an instance of UsageCounterName from a JSON string
usage_counter_name_instance = UsageCounterName.from_json(json)
# print the JSON string representation of the object
print(UsageCounterName.to_json())

# convert the object into a dict
usage_counter_name_dict = usage_counter_name_instance.to_dict()
# create an instance of UsageCounterName from a dict
usage_counter_name_from_dict = UsageCounterName.from_dict(usage_counter_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


