# SeverityCount

The number of occurrences created for a specific severity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of occurrences with the severity. | [optional] 
**severity** | **str** | The severity of the occurrences. | [optional] 

## Example

```python
from openapi_client.models.severity_count import SeverityCount

# TODO update the JSON string below
json = "{}"
# create an instance of SeverityCount from a JSON string
severity_count_instance = SeverityCount.from_json(json)
# print the JSON string representation of the object
print(SeverityCount.to_json())

# convert the object into a dict
severity_count_dict = severity_count_instance.to_dict()
# create an instance of SeverityCount from a dict
severity_count_from_dict = SeverityCount.from_dict(severity_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


