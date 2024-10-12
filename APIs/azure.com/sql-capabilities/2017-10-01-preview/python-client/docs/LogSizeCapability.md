# LogSizeCapability

The log size capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The log size limit (see &#39;unit&#39; for the units). | [optional] [readonly] 
**unit** | **str** | The units that the limit is expressed in. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_size_capability import LogSizeCapability

# TODO update the JSON string below
json = "{}"
# create an instance of LogSizeCapability from a JSON string
log_size_capability_instance = LogSizeCapability.from_json(json)
# print the JSON string representation of the object
print(LogSizeCapability.to_json())

# convert the object into a dict
log_size_capability_dict = log_size_capability_instance.to_dict()
# create an instance of LogSizeCapability from a dict
log_size_capability_from_dict = LogSizeCapability.from_dict(log_size_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


