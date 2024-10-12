# LogSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_duration** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.log_specification import LogSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of LogSpecification from a JSON string
log_specification_instance = LogSpecification.from_json(json)
# print the JSON string representation of the object
print(LogSpecification.to_json())

# convert the object into a dict
log_specification_dict = log_specification_instance.to_dict()
# create an instance of LogSpecification from a dict
log_specification_from_dict = LogSpecification.from_dict(log_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


