# LogNormal

Log normal randomly distributed response delay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**median** | **int** |  | [optional] 
**sigma** | **float** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.log_normal import LogNormal

# TODO update the JSON string below
json = "{}"
# create an instance of LogNormal from a JSON string
log_normal_instance = LogNormal.from_json(json)
# print the JSON string representation of the object
print(LogNormal.to_json())

# convert the object into a dict
log_normal_dict = log_normal_instance.to_dict()
# create an instance of LogNormal from a dict
log_normal_from_dict = LogNormal.from_dict(log_normal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


